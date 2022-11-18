import mongoose from 'mongoose';

const { Schema } = mongoose;

const TodoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: new Date(),
    },
    status: {
      type: String,
      enum: ['CREATED', 'EXECUTE', 'FINISHED'],
    },
    responsibleUsers: {
      type: [mongoose.Types.ObjectId],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: 'todos',
    versionKey: false,
  }
);

const Todo = mongoose.model('Todo', TodoSchema);

export default Todo;
