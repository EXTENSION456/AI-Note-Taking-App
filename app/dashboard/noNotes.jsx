import { FaStickyNote } from "react-icons/fa";

export default function NoNotes({ collapsed }) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        {/* Icon */}
        <div className="bg-slate-200 p-4 rounded-full mb-3">
          <FaStickyNote className="text-slate-600" size={28} />
        </div>

        {/* Text */}
        {!collapsed && (
          <>
            <h2 className="text-lg font-semibold text-black">
              No Notes Yet
            </h2>
            <p className="text-sm text-black mt-1">
              Start by creating your first note and it will appear here.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
