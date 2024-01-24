const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/courses
router.route('/').get(getThoughts).post(createThought);

// /api/courses/:courseId
router
  .route('/:thoughtid')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router
.route("/:thoughtid/reactions")
.post(addReaction)

router
.route("/:thoughtid/reactions/:reactionid")
.delete(deleteReaction)




module.exports = router;
