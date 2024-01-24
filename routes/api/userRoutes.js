const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser
} = require('../../controllers/userController');

// /api/Userts
router.route('/').get(getUsers).post(createUser);

// /api/Userts/:UsertId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);


// /api/Userts/:UsertId/Friends/:FriendId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;
