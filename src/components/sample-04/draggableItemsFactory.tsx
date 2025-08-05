import clsx from "clsx";
import { DRAGGABLE_COUNT, DRAGGABLE_PREFIX } from "./constants";
import { DraggableItem } from "./DraggableItem";
import type { DraggableId } from "./types";

type CreateDraggableItemsProps = {
  isDragged: (id: DraggableId) => boolean;
};

/**
 * DraggableItemsを生成する
 */
export const createDraggableItems = ({
  isDragged,
}: CreateDraggableItemsProps) =>
  Array.from({ length: DRAGGABLE_COUNT }, (_, i) => {
    const id = `${DRAGGABLE_PREFIX}${i}` as DraggableId;
    return (
      <DraggableItem id={id} key={i}>
        <div className={clsx("p-2", isDragged(id) && "text-red-500")}>
          draggable-{i}
        </div>
      </DraggableItem>
    );
  });
