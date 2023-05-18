import { useOthers } from "@/liveblocks/liveblocks.config";

export const SomeoneIsTyping = () => {
  const someoneIsTyping = useOthers((others) =>
    others.some((other) => other.presence.isTyping)
  );

  return (
    <div className="someone_is_typing">
      {someoneIsTyping ? "Someone is typing..." : ""}
    </div>
  );
};
