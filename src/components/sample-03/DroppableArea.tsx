import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DroppableAreaProps = {
  id: string;
  children: ReactNode;
};

export function DroppableArea({ id, children }: DroppableAreaProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`
        min-h-[200px] p-5 border-2 border-dashed rounded-lg transition-all duration-200 ease-in-out
        ${isOver ? "border-blue-500 bg-blue-50" : "border-gray-300"}
      `}
    >
      {children}
      {isOver && <p className="text-blue-600 font-medium">ここにドロップ！</p>}
    </div>
  );
}
