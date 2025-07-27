import { Link2Icon } from "lucide-react";
export default function ShareOptions() {
  const users = Array(3).fill(null);

  return (
    <div className="flex items-center gap-5 absolute bottom-10 left-0 bg-base border p-2 border-accent rounded-md">
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex flex-col items-center p-2 rounded-full border border-accent">
          <Link2Icon size={25} />
        </div>
        <span className="text-xs text-text-light">link</span>
      </div>
      {users.map((_, index) => (
        <div className="flex flex-col items-center" key={index}>
          <div className="w-10 h-10 rounded-full bg-accent-secondary"></div>
          <span className="mt-1 text-xs text-text-light">tobias</span>
        </div>
      ))}
    </div>
  );
}
