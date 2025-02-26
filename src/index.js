import express from "express";
import passport from "./config/passport.js";
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import "./database/index.js"; // Importar la conexión a MongoDB

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Inicializar Passport
app.use(passport.initialize());

// Rutas
app.use("/users", userRoutes);
app.use("/auth", authRoutes); // Registrar la ruta de autenticación

// Puerto de la aplicación
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});