import { useSortable } from "@dnd-kit/sortable";
import clsx from "clsx";
import type { ReactNode } from "react";

type SortableItemProps = {
  children: ReactNode;
  id: string;
  isSelected: boolean;
  handleClick: () => void;
};

export default function SortableItem({
  children,
  id,
  isSelected,
  handleClick,
}: SortableItemProps) {
  const { setNodeRef, listeners, attributes } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={clsx("cursor-pointer p-4 border rounded-lg", {
        "bg-red-600/50": isSelected,
      })}
      onClick={() => handleClick()}
    >
      {children}
    </div>
  );
}
