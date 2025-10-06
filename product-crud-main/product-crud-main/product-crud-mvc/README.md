# Product CRUD API (Node.js + MongoDB + MVC)

## 📦 Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start MongoDB locally (default URL: `mongodb://127.0.0.1:27017/productsdb`)

3. Run server:
   ```bash
   npm start
   ```

## 🧠 API Endpoints

| Method | Endpoint             | Description |
|--------|----------------------|--------------|
| POST   | /api/products        | Create a product |
| GET    | /api/products        | Get all products |
| GET    | /api/products/:id    | Get product by ID |
| PUT    | /api/products/:id    | Update product |
| DELETE | /api/products/:id    | Delete product |

### Bonus Features
- Category field
- Pagination support
- Error handling middleware
- Mongoose timestamps
