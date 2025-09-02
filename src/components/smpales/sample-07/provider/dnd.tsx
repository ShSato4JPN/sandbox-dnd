import { DndContext, PointerSensor, useSensors } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DndProviderProps = {
  children: ReactNode;
};

export default function DndProvider({ children }: DndProviderProps) {
  const sensors = useSensors({
    sensor: PointerSensor,
    options: {
      activationConstraint: {
        distance: 8, // 8px動かしたらドラッグ開始
      },
    },
  });

  return <DndContext sensors={sensors}>{children}</DndContext>;
}
