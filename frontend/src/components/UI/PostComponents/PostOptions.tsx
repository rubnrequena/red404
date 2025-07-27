import { UserRoundXIcon, LucideFlag } from "lucide-react";
export default function PostOptions() {
  return (
    <div className="absolute right-0  border border-accent p-2 rounded-md bg-base">
      <button className="flex items-center gap-2 py-2 px-8 w-full rounded-md hover:bg-accent">
        <UserRoundXIcon width={20} />
        <span className="text-red-500/90">unfollow</span>
      </button>
      <button className="flex items-center gap-2 py-2 px-8 w-full rounded-md hover:bg-accent">
        <LucideFlag width={20} />
        <span className="text-red-500/90">report</span>
      </button>
    </div>
  );
}
