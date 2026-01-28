import { db } from "../../firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const productRef = collection(db, "products");

export const fetchProducts = async () => {
  const snapshot = await getDocs(productRef);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const addProduct = async (product) => {
  await addDoc(productRef, product);
};

export const deleteProduct = async (id) => {
  const productDoc = doc(db, "products", id);
  await deleteDoc(productDoc);
};

export const updateProduct = async (id, updatedData) => {
  const productDoc = doc(db, "products", id);
  await updateDoc(productDoc, updatedData);
};
