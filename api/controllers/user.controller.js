import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import User from '../models/user.models.js';

export const test = (req, res) => {
    res.json({message : 'API is working'});
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
        return next(errorHandler(403, "Vous n'etes pas autoriser à modifier cet utilisateur"));
    }
    if (req.body.password) {
        if (req.body.password.length < 8) {
            return next(errorHandler(400, 'Mot de passe minimun 8 caracteres'));
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
        if (req.body.username.length < 7 || req.body.username.length > 20) {
            return next(errorHandler(400, 'Nom utilisateur entre 7 et 20 caractères'));
        }
        if (req.body.username.includes(' ')) {
            return next(errorHandler(400, "Nom utilisateur ne contient pas d'espace"));
        }
        if (req.body.username !== req.body.username.toLowerCase()) {
            return next(errorHandler(400, 'Nom utilisateur doit etre miniscule'));
        }
        if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
            next(errorHandler(400, 'Nom utilisateur doit seulement contenir des lettres et nombres'));
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(
                req.params.userId,
                {
                  $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password,
                  },
                },
                { new: true }
              );
              const { password, ...rest } = updatedUser._doc;
              res.status(200).json(rest);
        } catch (error) {
            next(error);
        }
    }
    
}

export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.userId) {
      return next(errorHandler(403, "Vous n'etes pas autoriser à supprimer cet utilisateur"));
    }
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200).json('Utilisateur supprimé');
    } catch (error) {
      next(error);
    }
};

export const signout = (req, res, next) => {
    try {
      res
        .clearCookie('access_token')
        .status(200)
        .json('Utilisateur deconnecté');
    } catch (error) {
      next(error);
    }
  };

  export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403,"Vous n'êtes pas autorisé à voir tous les utilisateurs"));
    }
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'asc' ? 1 : -1;
      const users = await User.find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });
      const totalUsers = await User.countDocuments();
      const now = new Date();
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthUsers = await User.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
      res.status(200).json({
        users: usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };