//deconstructing the Thought and User models 
const { Thought, User } = require("../models");

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate("thoughts")
        .populate("friends")
        .select("-__v");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  // Create a single user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      if (!user) {
        return res.status(404).json({ message: "Could not create user" });
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Delete a user based on the userId entered
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      if (!deletedUser) {
        return res.status(404).json({ message: "Could not delete user" });
      }

      res.json({ message: "Successfully deleted user!" });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: "No user with this id!" });
      }

      res.json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //adds a friend to a user based on friendId
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $push: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //Deletes a friend based on friendId
  async removeFriend(req, res) {
    try {
      const deletedUser = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json("Friend has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
