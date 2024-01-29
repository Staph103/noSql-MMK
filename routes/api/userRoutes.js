const router = require("express").Router();

//deconstruction of functions used in user controller
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser,
} = require("../../controller/userController");

// /api/users to show all users and create a user
router.route("/").get(getUsers).post(createUser);

// /api/Users/:userId get a single user and delete or update a user
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/Friends/:FriendId delete or add a friend
router.route("/:userId/friends/:friendId").delete(removeFriend).post(addFriend);

module.exports = router;
