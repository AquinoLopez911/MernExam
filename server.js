const express = require("express"),
          app = express(),
      DB_NAME = 'petsDB',
         port = 8000,
         cors = require("cors");


app.use(express.static(__dirname + "./front-end/build"));
app.use(express.json());
app.use(cors());

require("./back-End/utils/mongoose")(DB_NAME)
require("./back-End/utils/routes")(app)

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});