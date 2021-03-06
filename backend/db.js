const mongoose = require("mongoose");

const { USERNAME, PASSWORD, DB } = process.env;

mongoose
  .connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nnbxv.mongodb.net/${DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch(() => {
    console.log("Connection to MongoDB failed!");
    process.exit(1);
  });
