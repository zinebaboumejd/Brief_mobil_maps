const mongoose = require("mongoose");

const ScotterSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "S'il vous plaît entrez votre nom"],
        },
        price:{
            type: Number,
            required: [true, "S'il vous plaît entrez votre prenom"],
        },
        description: {
            type: String,
            required: [true, "S'il vous plaît entrez votre prenom"],
        },

            longitude:{
                type: Number,
                required: [true, "S'il vous plaît entrez votre prenom"],
            },
            latitude:{
                type: Number,
                required: [true, "S'il vous plaît entrez votre prenom"],
        },

        status: {
            type: String,
            required: true,
            default: "inactive",
            enum:["active","inactive"]
        },
        datecreation: {
            type: Date,
            required: true,
            default: Date.now,  
        }

    },
    {
        timestamp: true,
    }
    );

module.exports = mongoose.model("Scotter", ScotterSchema);