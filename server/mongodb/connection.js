// import mongoose from "mongoose";

// const connectDB = (url) => {
//   mongoose.set({ strictQuery: true });

//   mongoose
//     .connect(url)
//     .then(() => {
//       console.log("MongoDB connect successfully.");
//     })
//     .catch((err) => console.log(err));
// };

// export default connectDB;

// import mongoose from "mongoose";

// const connectDB = () => {
//   const url = "mongodb://localhost:27017/testy"; // Адрес вашей базы данных MongoDB
//   mongoose.set({ strictQuery: true });

//   mongoose
//     .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//       console.log("MongoDB connected successfully.");
//     })
//     .catch((err) => console.log(err));
// };

// export default connectDB;

import mongoose from "mongoose";

const url = "mongodb://0.0.0.0:2717";

const connectDB = (url) => {
  mongoose.set({ strictQuery: true });

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully.");
    })
    .catch((err) => console.log(err));
};

export default connectDB;

// Вызов функции connectDB с использованием константы url
connectDB(url);
