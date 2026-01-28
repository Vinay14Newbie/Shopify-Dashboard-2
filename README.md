# Shopify Admin App

A modern Shopify admin dashboard application built with React and Vite for managing products and store operations.

## Live Application

**Deployed Link:** http://amzn-shopify-123.s3-website.eu-north-1.amazonaws.com/

## About the App

This application provides a user-friendly interface for Shopify store administrators to:

- View and manage products
- Track inventory and product details
- Streamline store operations

## Tech Stack

- **Frontend:** React 18+ with Vite
- **Build Tool:** Vite with HMR (Hot Module Replacement)
- **Backend Integration:** Firebase
- **Linting:** ESLint for code quality
- **Styling:** CSS

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vinay14Newbie/Shopify-Dashboard-2.git
   cd Shopify-Admin
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Configure your Firebase credentials in `firebase.js`

4. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or the port shown in terminal)

## Building for Production

```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   ├── services/
│   │   └── productService.jsx  # Product API service
│   ├── App.css           # App styles
│   └── style.css         # Global styles
├── public/               # Static assets
├── firebase.js           # Firebase configuration
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Project dependencies
```
