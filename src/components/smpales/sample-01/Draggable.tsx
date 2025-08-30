import { useDraggable } from "@dnd-kit/core";
import clsx from "clsx";
import type { ReactNode } from "react";

type DraggableProps = {
  children: ReactNode;
  id: string;
};

export default function Draggable({ children, id }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
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
