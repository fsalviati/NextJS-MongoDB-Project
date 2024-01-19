"use client";
import NewTodo from "./components/NewTodo";
import TodoMain from "./components/TodoMain";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Declare clientPromise at the top
export default function Home() {
  const [showNewTodo, setShowNewTodo] = useState<boolean>(false);
  const [todoList, setTodoList] = useState<
    { index: string; todo: string; done: boolean }[]
  >([]);
  const [newTodo, setNewTodo] = useState<string>("");

  function handleAddNewTodo() {
    setShowNewTodo(true);
  }

  function handleCancelAddTodo() {
    setShowNewTodo(false);
    setNewTodo("");
  }

  function handleCreateTodo() {
    if (newTodo.trim() !== "") {
      setTodoList([
        ...todoList,
        { index: uuidv4(), todo: newTodo, done: false },
      ]);
      setNewTodo("");
      setShowNewTodo(false);
    }
  }

  function handleDeleteTodo(index: string) {
    const updatedTodoList = todoList.filter((todo) => todo.index !== index);
    setTodoList(updatedTodoList);
  }

  function handleToggleDone(index: string) {
    const updatedTodoList = todoList.map((todo) =>
      todo.index === index ? { ...todo, done: !todo.done } : todo,
    );
    setTodoList(updatedTodoList);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleSaveTodo() {
    console.log("SAVE TODO = ", todoList);
  }

  return (
    <main className="items-left mx-8 flex min-h-screen flex-col px-2 py-6 lg:mx-28 lg:px-16 lg:py-8 xl:mx-auto xl:w-1/2">
      {!showNewTodo && (
        <TodoMain
          handleAddNewTodo={handleAddNewTodo}
          todoList={todoList}
          handleDeleteTodo={handleDeleteTodo}
          handleSaveTodo={handleSaveTodo}
          handleToggleDone={handleToggleDone}
        />
      )}
      {showNewTodo && (
        <NewTodo
          handleCancelAddTodo={handleCancelAddTodo}
          handleCreateTodo={handleCreateTodo}
          handleInputChange={handleInputChange}
          newTodo={newTodo}
        />
      )}
    </main>
  );
}
