import mongoose from "mongoose";

const debuteSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
});

const Debute = mongoose.model("Debute", debuteSchema);

export default Debute;
