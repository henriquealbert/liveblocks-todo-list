import { useOthers } from "@/liveblocks/liveblocks.config";

export const WhoIsHere = () => {
  const userCount = useOthers((others) => others.length);

  return (
    <div className="text-gray-500 mb-3">
      There are {userCount} other users online
    </div>
  );
};
