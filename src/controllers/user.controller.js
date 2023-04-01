import User from "../models/user.model.js";

export const listarUsuarios = async (req, res) => {
  const usuarios = await User.findAll();
  return res.status(200).json(usuarios);
};

export const cadastrarUsuario = async (req, res) => {
  const { email } = req.body;

  const usuarioExistente = await User.findAll({
    where: { email },
  });

  if (usuarioExistente.some((user) => user.email === email))
    return res.status(409).json({ erro: "Usuário já cadastrado!" });

  const usuario = await User.create(req.body);
  return res.status(201).json(usuario);
};

export const deletarUsuario = async (req, res) => {
  const { id } = req.params;

  await User.destroy({ where: { id } }).catch((err) =>
    res.status(400).json(err)
  );

  return res.status(200).json({ mensagem: "Usuario Deletado com Sucesso" });
};

export const atualizarUsuario = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (!user) return res.status(404).json({ erro: "Usuário não encontrado!" });

  await User.update(req.body, { where: { id } });

  return res.status(200).json({ mensagem: "Usuario atualizado com sucesso!" });
};

export const procurarUsuarioPorId = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) return res.status(404).json({ erro: "Usuário não encontrado" });

  res.status(200).json(user);
};
