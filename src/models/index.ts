import mongoose, { Schema, model } from "mongoose";

export interface Todo extends mongoose.Document{
    text: string;
    completed: string;
};

const TodoSchema = new mongoose.Schema({
    text: String,
    completed: Boolean
});

export default mongoose.model<Todo>('Todo',TodoSchema);
