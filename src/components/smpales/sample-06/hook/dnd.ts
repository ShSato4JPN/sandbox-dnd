import type { DragEndEvent } from "@dnd-kit/core";

export const handleDragEnd = (event: DragEndEvent) => {
  console.log(event);
};
