const express = require("express");
const {PORT} = require("./config/setupFile");
const CityRepository = require("./repository/city-repository")
// CREATE THE INSTANCE OF EXPRESS APP

const createServer = async()=>{
  const app = express();
  app.use(express.json());
  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
  });
};
createServer();