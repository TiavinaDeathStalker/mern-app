import Post from '../models/post.models.js';
import { errorHandler } from '../utils/error.js';
export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "Vous n'etes pas autorisé a crée un poste"));
  }
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, 'Tous les champs sont requis'));
  }
  const slug = req.body.title
    .split(' ')
    .join('-')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, '');
  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};