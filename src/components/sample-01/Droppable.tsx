import { useDroppable } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DraggableProps = {
  children: ReactNode;
};

export function Droppable({ children }: DraggableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
