import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("conectado com sucesso!");
  } catch (err) {
    console.error("rro ao conectar ao MongoDB:", err.message);
    process.exit(1);
  }
};
