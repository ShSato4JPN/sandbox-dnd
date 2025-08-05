import { DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DROPPABLE_AREA_ID } from "./constants";
import { DroppableArea } from "./DroppableArea";
import { SortableItem } from "./SortableItem";
import { useDragAndDrop } from "./useDragAndDrop";
import { createDraggableId } from "./utils";

export default function Root() {
  const { draggedItemIds, draggableItems, handleDragEnd } = useDragAndDrop();

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        <div>
          <h3>ドラッグアイテム</h3>
          {draggableItems.map((item, index) => (
            <div key={index} className="m-2">
              {item}
            </div>
          ))}
        </div>
        <div>
          <h3>ドロップエリア</h3>
          <SortableContext
            items={draggedItemIds}
            strategy={verticalListSortingStrategy}
          >
            <DroppableArea id={DROPPABLE_AREA_ID}>
              {draggedItemIds.length > 0
                ? draggedItemIds.map((id) => (
                    <SortableItem key={id} id={id}>
                      {createDraggableId(id)} (移動完了!)
                    </SortableItem>
                  ))
                : "ここにアイテムをドロップしてください"}
            </DroppableArea>
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
}
