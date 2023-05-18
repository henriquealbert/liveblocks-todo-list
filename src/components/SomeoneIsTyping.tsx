import { useOthers } from "@/liveblocks/liveblocks.config";

export const SomeoneIsTyping = () => {
  const someoneIsTyping = useOthers((others) =>
    others.some((other) => other.presence.isTyping)
  );

  return (
    <div className="text-xs text-gray-400">
      {someoneIsTyping ? "Someone is typing..." : ""}
    </div>
  );
};
