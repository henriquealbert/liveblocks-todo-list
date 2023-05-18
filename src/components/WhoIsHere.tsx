import { useOthers } from "@/liveblocks/liveblocks.config";

export const WhoIsHere = () => {
  const userCount = useOthers((others) => others.length);

  return (
    <div className="who_is_here">There are {userCount} other users online</div>
  );
};
