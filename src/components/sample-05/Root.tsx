import { DndContext, useDraggable, type DragEndEvent } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

function DraggableItem({
  id,
  position,
}: {
  id: string;
  position: { x: number; y: number };
}) {
  const { listeners, attributes, setNodeRef, transform } = useDraggable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    position: "absolute" as const,
    left: position.x,
    top: position.y,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Draggable
      </button>
      <div>test</div>
    </div>
  );
}

export default function Root() {
  const [itemPosition, setItemPosition] = useState({ x: 100, y: 100 });

  const handleDragEnd = (event: DragEndEvent) => {
    if (event.delta) {
      setItemPosition((prev) => ({
        x: prev.x + event.delta.x,
        y: prev.y + event.delta.y,
      }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="w-dvw h-dvh bg-orange-200 relative">
        <DraggableItem id="draggable-test" position={itemPosition} />
      </div>
    </DndContext>
  );
}
