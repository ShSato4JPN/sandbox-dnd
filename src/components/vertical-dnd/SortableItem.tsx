import { useSortable } from "@dnd-kit/sortable";
import type { ReactNode } from "react";

type SortableItemProps = {
  children: ReactNode;
  id: string;
};

export default function SortableItem({ children, id }: SortableItemProps) {
  const { setNodeRef, listeners, attributes } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="p-4 border rounded-lg"
    >
      {children}
    </div>
  );
}
