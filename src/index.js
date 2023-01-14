const express = require("express");
const { PORT } = require("./config/setupFile");

const ApiRoutes = require("./routes/index");
const db= require("./models/index");

// CREATE THE INSTANCE OF EXPRESS APP


const createServer = async () => {

  const app = express();
  app.use(express.json());
  app.use("/api", ApiRoutes);

  app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
    if(process.env.Synchronize){
        db.sequelize.sync({ alter: true });
    }
  
  });
  
   
};
createServer();


