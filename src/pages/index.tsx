import { ClientSideSuspense } from "@liveblocks/react";

import { RoomProvider } from "@/liveblocks/liveblocks.config";
import { TodoList } from "@/components/TodoList";
import { LiveList } from "@liveblocks/client";

export default function Home() {
  return (
    <RoomProvider
      id={"nextjs-todo-list"}
      initialPresence={{ isTyping: false }}
      initialStorage={{ todos: new LiveList() }}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => <TodoList />}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
