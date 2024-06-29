const express = require("express");
const connectDB = require("./db/conn");
require("dotenv").config();
const Query = require("./model/queryModel");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to the database. Starting the server...");

    // post query
    app.post("/api/addQuery", async (req, res) => {
      try {
        const query = new Query(req.body);
        const createQuery = await query.save();
        res.status(201).send(createQuery);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    // get queries
    app.get("/api/getQueries", async (req, res) => {
      try {
        const queryList = await Query.find();
        res.status(200).send(queryList);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    // get individual query
    app.get("/api/getQuery/:id", async (req, res) => {
      try {
        const _id = req.params.id;
        const query = await Query.findById({ _id: _id });
        res.status(200).send(query);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(
      "Failed to connect to the database. Server not started.",
      error.message
    );
    process.exit(1);
  }
};

startServer();
