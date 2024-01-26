const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser
} = require('../../controller/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/Userts/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


// /api/users/:userId/Friends/:FriendId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;
