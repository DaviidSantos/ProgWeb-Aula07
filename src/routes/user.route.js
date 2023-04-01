import {
  atualizarUsuario,
  cadastrarUsuario,
  deletarUsuario,
  listarUsuarios,
  procurarUsuarioPorId,
} from "../controllers/user.controller.js";

export default (router) => {
  router.get("/users", listarUsuarios);
  router.post("/users", cadastrarUsuario);
  router.delete("/users/:id", deletarUsuario);
  router.patch("/users/:id", atualizarUsuario);
  router.get("/users/:id", procurarUsuarioPorId);
};
