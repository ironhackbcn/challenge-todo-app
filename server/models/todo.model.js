const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toDoSchema = new Schema(
  {
    user: String,
    title: String,
    body: String,
    done: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo;
