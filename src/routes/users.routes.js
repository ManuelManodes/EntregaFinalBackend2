import { Router } from "express";
import passport from "passport";
import UserRepository from "../repositories/user.repository.js";
import UserDTO from "../dtos/user.dto.js";
import { isAdmin, isUser } from "../middlewares/auth.js";

const router = Router();

// Ruta para obtener la información del usuario actual
router.get("/current", passport.authenticate('jwt', { session: false }), (req, res) => {
  const user = new UserDTO(req.user);
  res.render("current", { title: "CURRENT", user });
});

// Ruta para crear un nuevo usuario (solo para administradores)
router.post("/", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.create(req.body);
    res.status(201).json(new UserDTO(user));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para obtener un usuario por ID (solo para administradores)
router.get("/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(new UserDTO(user));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para actualizar un usuario por ID (solo para administradores)
router.put("/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.update(req.params.id, req.body);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(new UserDTO(user));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para eliminar un usuario por ID (solo para administradores)
router.delete("/:id", isAdmin, async (req, res) => {
  try {
    const user = await UserRepository.delete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;