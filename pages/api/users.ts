import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../utils/mongodb";
import TodoModel from "../../models/user.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    try {
      await dbConnect();
      const todos = TodoModel;
      const allTodos = await todos.find({});

      res.status(200).json({ todos: allTodos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      await dbConnect();
      await TodoModel.deleteMany({});

      const incomingTodos = req.body.todos;
      await TodoModel.insertMany(incomingTodos);

      res.status(200).json({ message: "Todos saved successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
