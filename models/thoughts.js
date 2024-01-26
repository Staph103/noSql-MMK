const { Schema, Types, model } = require("mongoose");
const reactionSchema = require("./reactions");
const {formatDate} = require("../utils/helpers");

const thoughtsSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: ts => formatDate(ts)
    },

    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);
thoughtsSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = model("thought", thoughtsSchema);

module.exports = Thought;
