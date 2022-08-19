import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// Routes Imports

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

// Database connection

connectDB();

const app = express();

// Body Parser

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

// Error Handler Middlewares
app.use(notFound);
app.use(errorHandler);

// PORT Setup
const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on Port ${PORT}`
  )
);
