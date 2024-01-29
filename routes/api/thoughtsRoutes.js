const router = require("express").Router();

//deconstruction of functions used in thought controller

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controller/thoughtController");

// /api/courses to show all thoughts and create a thought
router.route("/").get(getThoughts).post(createThought);

// /api/courses/:courseId get a single thought and delete or update a thought
router
  .route("/:thoughtsId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtsId/reactions").post(addReaction);

router.route("/:thoughtsId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
