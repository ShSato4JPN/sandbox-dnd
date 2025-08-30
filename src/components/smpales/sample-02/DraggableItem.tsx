import { useDraggable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DraggableItemProps = {
  id: string;
  children: ReactNode;
};

export function DraggableItem({ id, children }: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        cursor-grab p-2.5 border-2 border-gray-300 rounded-lg m-1
        ${isDragging ? "opacity-50" : "opacity-100"}
      `}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}
