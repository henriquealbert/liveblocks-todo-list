import {
  useMutation,
  useStorage,
  useUpdateMyPresence,
} from "@/liveblocks/liveblocks.config";
import { WhoIsHere } from "./WhoIsHere";
import { useState } from "react";
import { SomeoneIsTyping } from "./SomeoneIsTyping";

export const TodoList = () => {
  const [draft, setDraft] = useState("");

  const updateMyPresence = useUpdateMyPresence();
  const todos = useStorage((root) => root.todos);

  const addTodo = useMutation(({ storage }, text) => {
    storage.get("todos").push({ text });
  }, []);

  const deleteTodo = useMutation(({ storage }, index) => {
    storage.get("todos").delete(index);
  }, []);

  return (
    <div className="mx-auto max-w-lg mt-16">
      <h1 className="text-lg mb-6">
        Hello there! This is made with Liveblocks and Nextjs
      </h1>
      <WhoIsHere />
      <input
        type="text"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="What needs to be done?"
        value={draft}
        onChange={(e) => {
          setDraft(e.target.value);
          updateMyPresence({ isTyping: true });
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateMyPresence({ isTyping: false });
            addTodo(draft);
            setDraft("");
          }
        }}
        onBlur={() => updateMyPresence({ isTyping: false })}
      />
      <SomeoneIsTyping />

      {todos.map((todo, index) => {
        return (
          <div key={index} className="flex items-center justify-between my-3">
            <div className="text-gray-800">{todo.text}</div>
            <button
              className="text-red-600 hover:text-red-400"
              onClick={() => deleteTodo(index)}
            >
              ✕
            </button>
          </div>
        );
      })}
    </div>
  );
};
