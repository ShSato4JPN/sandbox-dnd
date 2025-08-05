import type { DragEndEvent } from "@dnd-kit/core";
import { useCallback, useMemo, useState } from "react";
import { createDragEndHandler } from "./dragHandlers";
import { createDraggableItems } from "./draggableItemsFactory";
import type { DraggableId, SortableId } from "./types";
import { createSortableId } from "./utils";

/**
 * ドラッグ&ドロップの状態とロジックを管理するカスタムフック
 */
export const useDragAndDrop = () => {
  const [draggedItemIds, setDraggedItemIds] = useState<SortableId[]>([]);

  // ドラッグ済みかどうかの判定をメモ化
  const draggedSet = useMemo(() => new Set(draggedItemIds), [draggedItemIds]);

  const isDragged = useCallback(
    (id: DraggableId): boolean => {
      const sortableId = createSortableId(id);
      return draggedSet.has(sortableId);
    },
    [draggedSet]
  );

  // DraggableItemsをメモ化
  const draggableItems = useMemo(
    () => createDraggableItems({ isDragged }),
    [isDragged]
  );

  // ドラッグエンドハンドラー
  const handleDragEnd = useCallback(
    (event: DragEndEvent) => createDragEndHandler(setDraggedItemIds)(event),
    []
  );

  return {
    draggedItemIds,
    draggableItems,
    handleDragEnd,
  };
};
