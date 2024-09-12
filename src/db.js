import mongoose from "mongoose";

const mongoDB = "mongodb+srv://nevespgabriel:95135759@cluster0.kykoa.mongodb.net/"
const database = "armario";

async function main () {
    mongoose.connect(mongoDB + database)
}

main()
    .then(() => console.log("Conectado com sucesso."))
    .catch(err => console.log(err));

export default mongoose;