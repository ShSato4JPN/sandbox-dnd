import { useDraggable } from "@dnd-kit/core";
import clsx from "clsx";
import type { ReactNode } from "react";

type DraggableProps = {
  children: ReactNode;
};

export default function Draggable({ children }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });

  return (
    <button
      ref={setNodeRef}
      className={clsx(
        transform
          ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            }
          : undefined
      )}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}
