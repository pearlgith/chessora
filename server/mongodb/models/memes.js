import mongoose from "mongoose";

const memesSchema = new mongoose.Schema({
  date: String,
  time: String,
  image: String,
});

const Memes = mongoose.model("Memes", memesSchema);

export default Memes;
