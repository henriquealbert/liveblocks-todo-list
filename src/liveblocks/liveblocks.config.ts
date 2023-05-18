import { LiveList, createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { env } from "@/utils/env.mjs";

const client = createClient({
  publicApiKey: env.NEXT_PUBLIC_LIVEBLOCKS_API_KEY,
});

type Presence = {
  isTyping: boolean;
};

type Storage = {
  todos: LiveList<{ text: string }>;
};

export const {
  suspense: {
    RoomProvider,
    useOthers,
    useUpdateMyPresence,
    useStorage,
    useMutation,
  },
} = createRoomContext<Presence, Storage>(client);
