import { Film } from "../models/film.js";


export const getAllFilms = async (req, res) => {
  const films = await Film.find();
  res.send(films);
};

export const getFilmById = async (req, res) => {
  const film = await Film.findById(req.params.id);
  if (!film) {
    return res.status(404).send({ error: "Filme não encontrado" });
  }
  res.send(film);
};

export const createFilm = async (req, res) => {
  const film = new Film({
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });

  await film.save();
  res.status(201).send({ message: "Filme criado", film });
};

export const deleteFilm = async (req, res) => {
  const film = await Film.findByIdAndDelete(req.params.id);
  if (!film) {
    return res.status(404).send({ error: "Filme não encontrado" });
  }
  res.send({ message: "Filme deletado", film });
};

export const updateFilm = async (req, res) => {
  const film = await Film.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      description: req.body.description,
      image_url: req.body.image_url,
      trailer_url: req.body.trailer_url,
    },
    { new: true }
  );
  if (!film) {
    return res.status(404).send({ error: "Filme não encontrado" });
  }
  res.send({ message: "Filme atualizado", film });
};
