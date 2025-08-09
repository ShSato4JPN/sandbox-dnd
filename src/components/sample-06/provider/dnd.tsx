import { DndContext } from "@dnd-kit/core";
import type { ReactNode } from "react";

type DndProviderProps = {
  children: ReactNode;
};

export default function DndProvider({ children }: DndProviderProps) {
  return <DndContext>{children}</DndContext>;
}
