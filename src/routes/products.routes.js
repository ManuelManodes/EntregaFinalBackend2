// Proyectos/EntregaFinal/src/routes/products.routes.js
import { Router } from "express";
import { authorize } from "../middleware/auth.js";
import passport from "passport";

const router = Router();

router.post("/", passport.authenticate('jwt', { session: false }), authorize(['admin']), async (req, res) => {
  // lógica para crear un producto
});

router.put("/:id", passport.authenticate('jwt', { session: false }), authorize(['admin']), async (req, res) => {
  // lógica para actualizar un producto
});

router.delete("/:id", passport.authenticate('jwt', { session: false }), authorize(['admin']), async (req, res) => {
  // lógica para eliminar un producto
});

export default router;