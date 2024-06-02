const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "mongodb+srv://museu:museu14@museu.ydyrnlq.mongodb.net/?retryWrites=true&w=majority&appName=Museu", 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log("Ligado na DB!");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main