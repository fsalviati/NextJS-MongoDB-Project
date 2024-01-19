import React from "react";
import Button from "./Button";
import TodoItem from "./TodoItem";

type HandleNewTodoFunction = () => void;
type HandleDeleteTodoFunction = (index: string) => void;
type HandleSaveTodoFunction = () => void;
type HandleToggleDoneFunction = (index: string) => void;

interface Todo {
  index: string;
  todo: string;
  done: boolean;
}

interface TodoMainProps {
  handleAddNewTodo: HandleNewTodoFunction;
  handleDeleteTodo: HandleDeleteTodoFunction;
  handleSaveTodo: HandleSaveTodoFunction;
  handleToggleDone: HandleToggleDoneFunction;
  todoList: Todo[];
}
export default function TodoMain({
  handleAddNewTodo,
  handleDeleteTodo,
  handleSaveTodo,
  handleToggleDone,
  todoList,
}: TodoMainProps) {
  const btnNewText = "New";
  const btnSaveText = "Save Todos";

  return (
    <>
      <section className="flex w-full flex-row items-center justify-between">
        <h1 className="text-center text-6xl font-medium tracking-wide">
          Todos
        </h1>
        <Button text={btnNewText} onClickFunction={handleAddNewTodo} />
      </section>
      <section className="xl:1/2 mt-16 w-full lg:w-2/3">
        <ul>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.index}
              index={todo.index}
              todo={todo.todo}
              isDone={todo.done}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleDone={handleToggleDone}
            />
          ))}
        </ul>
        {todoList.length > 0 && (
          <div className="mt-20">
            <Button text={btnSaveText} onClickFunction={handleSaveTodo} />
          </div>
        )}
      </section>
    </>
  );
}
