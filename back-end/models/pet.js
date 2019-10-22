const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema({
    
    name: {
        type : String,
        required : [true, "Pet name is required"],
        minlength : [3, "name must be 3 charachters or longer"],
        unique: true
    },
    type: {
        type : String,
        required : [true, "pet type is required"],
        minlength : [3, "type must be 3 charachters or longer"],
    },
    description: {
        type: String,
        minlength : [10, "pet description must be 10 charachters or longer"],
        required : [true, "pet type is required"],
    },
    skill1: {
        type: String,
        
    },
    skill2: {
        type: String,
        
    },
    skill3: {
        type: String,
        
    },
    likes: {
        type: Number,
        default: 0
    },
    adopted: {
        type: Boolean,
        default: false
    }


}, {timestamps: true});

mongoose.model("Pet", PetSchema);