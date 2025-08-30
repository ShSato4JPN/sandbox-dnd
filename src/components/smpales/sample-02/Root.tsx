import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useState } from "react";
import { DraggableItem } from "./DraggableItem";
import { DroppableArea } from "./DroppableArea";

export default function Root() {
  const [isDropped, setIsDropped] = useState(false);

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    if (over && over.id === "droppable-area") {
      setIsDropped(true);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <div>
          <h3>ドラッグ元</h3>
          {!isDropped && (
            <DraggableItem id="item-1">📦 アイテム1</DraggableItem>
          )}
        </div>
        <div>
          <h3>ドロップエリア</h3>
          <DroppableArea id="droppable-area">
            {isDropped ? (
              <DraggableItem id="item-1">
                📦 アイテム1 (移動完了!)
              </DraggableItem>
            ) : (
              <p>ここにアイテムをドロップしてください</p>
            )}
          </DroppableArea>
        </div>
      </div>
    </DndContext>
  );
}
