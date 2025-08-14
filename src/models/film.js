import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image_url: String,
  trailer_url: String,
});

export const Film = mongoose.model("Film", filmSchema);
