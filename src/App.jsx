import { useEffect, useState } from "react";
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} from "./services/productService";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load products
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  // Add or Update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price) {
      alert("Name and price are required");
      return;
    }

    const productData = {
      name,
      price: Number(price),
    };

    if (description) {
      productData.description = description;
    }

    if (editingId) {
      // ✅ update existing product
      await updateProduct(editingId, productData);
    } else {
      // ✅ add new product
      await addProduct(productData);
    }

    // Reset form
    setName("");
    setPrice("");
    setDescription("");
    setEditingId(null);

    loadProducts();
  };

  // Delete product
  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  // Start editing
  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description || "");
    setEditingId(product.id);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Shopify Admin Dashboard</h1>

      {/* Add / Edit Form */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">
          {editingId ? "Update Product" : "Add Product"}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setName("");
              setPrice("");
              setDescription("");
              setEditingId(null);
            }}
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* Product List */}
      <ul className="product-grid">
        {products.map((p) => (
          <li className="product-card" key={p.id}>
            <strong>{p.name}</strong> ₹{p.price}
            {p.description && <p>{p.description}</p>}
            <div className="actions">
              <button onClick={() => handleEdit(p)}>Edit</button>
              <button onClick={() => handleDelete(p.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
