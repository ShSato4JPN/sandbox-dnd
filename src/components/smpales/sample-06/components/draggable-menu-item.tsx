import { useDraggable } from "@dnd-kit/core";

type DraggableMenuItemProps = {
  id: string;
  label: string;
};

export default function DraggableMenuItem({
  id,
  label,
}: DraggableMenuItemProps) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
  });

  return (
    <div
      className="border-1 rounded-lg p-2 cursor-pointer hover:border-red-500"
      {...attributes}
      {...listeners}
      ref={setNodeRef}
    >
      {label}
    </div>
  );
}
