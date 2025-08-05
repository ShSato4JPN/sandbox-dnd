import type { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { DROPPABLE_AREA_ID } from "./constants";
import type { SortableId } from "./types";
import { createSortableId, isDraggableId, isSortableId } from "./utils";

/**
 * ドラッグエンドイベントを処理するロジック
 */
export const createDragEndHandler = (
  setDraggedItemIds: React.Dispatch<React.SetStateAction<SortableId[]>>
) => {
  return (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    // DraggableからDroppableAreaへのドロップ
    if (isDraggableId(activeId) && overId === DROPPABLE_AREA_ID) {
      const sortableId = createSortableId(activeId);
      setDraggedItemIds((prev) => [...prev, sortableId]);
      return;
    }

    // SortableContext内での並び替え
    if (isSortableId(activeId) && isSortableId(overId)) {
      setDraggedItemIds((items) => {
        const oldIndex = items.indexOf(activeId);
        const newIndex = items.indexOf(overId);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
};
