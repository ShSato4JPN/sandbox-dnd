import { DRAGGABLE_PREFIX, SORTABLE_PREFIX } from "./constants";
import type { DraggableId, SortableId } from "./types";

/**
 * DraggableのIDをSortableのIDに変換
 */
export const createSortableId = (draggableId: DraggableId): SortableId =>
  draggableId.replace(DRAGGABLE_PREFIX, SORTABLE_PREFIX) as SortableId;

/**
 * SortableのIDをDraggableのIDに変換
 */
export const createDraggableId = (sortableId: SortableId): DraggableId =>
  sortableId.replace(SORTABLE_PREFIX, DRAGGABLE_PREFIX) as DraggableId;

/**
 * IDがDraggableかどうかを判定
 */
export const isDraggableId = (id: string): id is DraggableId =>
  id.startsWith(DRAGGABLE_PREFIX);

/**
 * IDがSortableかどうかを判定
 */
export const isSortableId = (id: string): id is SortableId =>
  id.startsWith(SORTABLE_PREFIX);
