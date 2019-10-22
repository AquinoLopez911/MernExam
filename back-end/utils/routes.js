const Pet = require('../controllers/pets');

module.exports = function(app) {
    app.get("/api/pets", Pet.getAll);
    app.get("/api/pets/:_id", Pet.getOne);
    app.post("/api/pets", Pet.create);
    app.put("/api/pets/:_id", Pet.update);
    app.delete("/api/pets/:_id", Pet.delete);
}