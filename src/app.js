const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

// CORS setup
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/cart', require('./routes/cartRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/chatbot', require('./routes/chatbotRoutes'));

module.exports = app;