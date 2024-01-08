import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  content: String,
  image: String,
  source: String,
});

const News = mongoose.model("News", newsSchema);

export default News;
