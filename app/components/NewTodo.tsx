import React, { useEffect, useRef } from "react";
import Button from "./Button";

type HandleCreate = () => void;
type HandleCancel = () => void;
type handleInput = (event: React.ChangeEvent<HTMLInputElement>) => void;

interface NewTodoProps {
  handleCreateTodo: HandleCreate;
  handleCancelAddTodo: HandleCancel;
  handleInputChange: handleInput;
  newTodo: string;
}

export default function NewTodo({
  handleCreateTodo,
  handleCancelAddTodo,
  handleInputChange,
  newTodo,
}: NewTodoProps) {
  const btnCancelText = "Cancel";
  const btnCreateText = "Create";
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <section className="flex w-full flex-col">
      <h1 className="text-left text-6xl font-medium tracking-wide">New Todo</h1>
      <input
        className="my-8 rounded-lg border bg-transparent p-2"
        onChange={handleInputChange}
        value={newTodo}
        ref={inputRef}
      />
      <div className="text-right">
        <Button text={btnCreateText} onClickFunction={handleCreateTodo} />
        <Button text={btnCancelText} onClickFunction={handleCancelAddTodo} />
      </div>
    </section>
  );
}
