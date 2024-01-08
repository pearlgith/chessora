import express from "express";
import cors from "cors";
import User from "./mongodb/models/register.js";
import connectDB from "./mongodb/connection.js";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import News from "./mongodb/models/News.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import multer from "multer";
import Debute from "./mongodb/models/Debute.js";
import Memes from "./mongodb/models/memes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const upload = multer({ dest: join(__dirname, "uploads") });

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Маршрут для добавления мемов
app.post("/api/memes", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path; // Получаем путь к загруженному файлу
    const image = imagePath.replace(__dirname, ""); // Получаем часть пути, начиная с "uploads/"
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    // Создание новой записи в базе данных
    const newMeme = new Memes({
      date: currentDate,
      time: currentTime,
      image,
    });
    // Сохранение новой записи
    await newMeme.save();
    res.status(201).json({ message: "Мем успешно добавлен" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.get("/api/memes", async (req, res) => {
  try {
    const memes = await Memes.find(); // Получение всех мемов из базы данных
    res.status(200).json({ success: true, data: memes });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// Маршрут для добавления дебюта
app.post("/api/opening", upload.single("image"), async (req, res) => {
  try {
    const { title, content } = req.body;
    const imagePath = req.file.path; // Получаем путь к загруженному файлу
    const image = imagePath.replace(__dirname, ""); // Получаем часть пути, начиная с "uploads/"
    // Создание новой записи в базе данных
    const newDebute = new Debute({
      title,
      content,
      image,
    });
    // Сохранение новой записи
    await newDebute.save();
    res.status(201).json({ message: "Дебют успешно добавлен" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.get("/api/opening", async (req, res) => {
  try {
    const openings = await Debute.find(); // Получение всех записей о дебюте из базы данных
    res.status(200).json({ success: true, data: openings });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// Маршрут для добавления новости
app.post("/api/news", upload.single("image"), async (req, res) => {
  try {
    const { title, content, source } = req.body;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const imagePath = req.file.path; // Получаем путь к загруженному файлу
    const pathParts = imagePath.split("uploads\\");
    const image = "uploads\\" + pathParts[1]; // Получаем часть пути, начиная с "uploads\\"
    // Создание новой записи в базе данных
    const newNews = new News({
      title,
      date,
      time,
      content,
      image,
      source,
    });
    // Сохранение новой записи
    await newNews.save();
    res.status(201).json({ message: "Новость успешно добавлена" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

app.get("/api/news", async (req, res) => {
  try {
    const news = await News.find(); // Получение всех новостей из базы данных
    res.status(200).json({ success: true, data: news });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.use("/api/register", async (req, res) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).json({ success: true, data: { user, token } });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.use("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Неверная почта или пароль" });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Неверная почта или пароль" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.use("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

app.use("/", (req, res) => {
  res.send("Hello this is the backend");
});

const startServer = async () => {
  try {
    connectDB(process.env.url);
    app.listen(5000, () => {
      console.log("Server is listening on port 5000");
    });
  } catch (error) {
    console.error(error);
  }
};

startServer();
