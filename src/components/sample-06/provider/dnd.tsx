import { DndContext } from "@dnd-kit/core";
import type { ReactNode } from "react";
import { handleDragEnd } from "../hook/dnd";

type DndProviderProps = {
  children: ReactNode;
};

export default function DndProvider({ children }: DndProviderProps) {
  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
}
