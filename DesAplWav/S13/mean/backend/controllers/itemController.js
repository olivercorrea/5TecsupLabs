const Song = require("../models/item");

exports.getItems = (req, res) => {
  const { search, sort } = req.query;
  let query = {};

  if (search) {
    query = {
      $or: [
        { title: new RegExp(search, "i") },
        { artist: new RegExp(search, "i") },
        { album: new RegExp(search, "i") },
        { genre: new RegExp(search, "i") },
      ],
    };
  }

  let sortQuery = {};
  if (sort) {
    const [field, order] = sort.split(":");
    sortQuery[field] = order === "desc" ? -1 : 1;
  }

  Song.find(query)
    .sort(sortQuery)
    .then((songs) => res.json(songs))
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.getItemById = (req, res) => {
  Song.findById(req.params.id)
    .then((song) => {
      if (!song)
        return res.status(404).json({ message: "Canción no encontrada" });
      res.json(song);
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.createItem = (req, res) => {
  const newSong = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
    releaseYear: req.body.releaseYear,
    duration: req.body.duration,
    imageUrl: req.body.imageUrl || "default-album-cover.jpg",
  });

  newSong
    .save()
    .then((song) => res.status(201).json(song))
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.updateItem = (req, res) => {
  Song.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((song) => {
      if (!song)
        return res.status(404).json({ message: "Canción no encontrada" });
      res.json(song);
    })
    .catch((error) => res.status(400).json({ error: error.message }));
};

exports.deleteItem = (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then((song) => {
      if (!song)
        return res.status(404).json({ message: "Canción no encontrada" });
      res.json({ message: "Canción eliminada correctamente" });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
