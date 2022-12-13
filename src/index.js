const express = require("express");

// CREATE THE INSTANCE OF EXPRESS APP

const createServer = async()=>{
    const app = express();
    app.listen(PORT,()=>{
        console.log(`Server running at port ${PORT}`);
    })

};
createServer();