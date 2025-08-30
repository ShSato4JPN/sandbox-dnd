import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DraggableItem } from "./DraggableItem";
import { DroppableArea } from "./DroppableArea";

type Item = {
  id: string;
  text: string;
  area: string;
};

export default function Root() {
  const [items, setItems] = useState<Item[]>([
    { id: "1", text: "📚 本", area: "source" },
    { id: "2", text: "✏️ ペン", area: "source" },
    { id: "3", text: "📱 スマホ", area: "source" },
  ]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    setItems((items) =>
      items.map((item) =>
        item.id === activeId ? { ...item, area: String(overId) } : item
      )
    );
  }

  const sourceItems = items.filter((item) => item.area === "source");
  const droppedItems = items.filter((item) => item.area === "target");

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <div style={{ flex: 1 }}>
          <h3>アイテム一覧</h3>
          <DroppableArea id="source">
            {sourceItems.map((item) => (
              <DraggableItem key={item.id} id={item.id}>
                {item.text}
              </DraggableItem>
            ))}
          </DroppableArea>
        </div>

        <div style={{ flex: 1 }}>
          <h3>選択済み</h3>
          <DroppableArea id="target">
            {droppedItems.map((item) => (
              <DraggableItem key={item.id} id={item.id}>
                {item.text}
              </DraggableItem>
            ))}
          </DroppableArea>
        </div>
      </div>
    </DndContext>
  );
}
