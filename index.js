const express = require("express");
const { connectMongodb } = require("./connection"); // MongoDB connection
const { logReqRes } = require("./middlewares/middle"); // Custom middleware for logging
const userRouter = require("./routes/user"); // User routes

const app = express();
const PORT = 8000;

// MongoDB Connection
connectMongodb("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => {
    console.log("MongoDB Connected!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Middleware for parsing form data
app.use(express.urlencoded({ extended: false }));

// Logging middleware (custom)
app.use(logReqRes("log.txt"));

// Routes
app.use('/api/user', userRouter);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
