import { db3 } from "../db3.js";

export const getTrei = (_, res) => {
  const q = "SELECT * FROM treinos";

  db3.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addTrei = (req, res) => {
  const q =
    "INSERT INTO treinos(`exercicio`, `series`, `repeticoes`) VALUES(?)";

  const values = [
    req.body.exercicio,
    req.body.series,
    req.body.repeticoes,
  ];

  db3.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Exercício criado com sucesso.");
  });
};

export const updateTrei = (req, res) => {
  const q =
    "UPDATE treinos SET `exercicio` = ?, `series` = ?, `repeticoes` = ? WHERE `id` = ?";

  const values = [
    req.body.exercicio,
    req.body.series,
    req.body.repeticoes,
  ];

  db3.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Exercício atualizado com sucesso.");
  });
};

export const deleteTrei = (req, res) => {
  const q = "DELETE FROM treinos WHERE `id` = ?";

  db3.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Exercício deletado com sucesso.");
  });
};
