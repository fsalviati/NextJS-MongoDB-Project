import { models, model, Schema } from "mongoose";

const modelName = "Todo"; // Use a consistent model name

const TodoSchema: Schema = new Schema({
  index: {
    type: String,
  },
  todo: {
    type: String,
  },
  done: {
    type: Boolean,
  },
});

const TodoModel = models[modelName] || model(modelName, TodoSchema);

export default TodoModel;
