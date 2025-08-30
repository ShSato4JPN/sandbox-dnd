import { closestCenter, DndContext, DragOverlay } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableItem from "./components/vertical-dnd/SortableItem";

const items = [
  {
    id: "item-1",
    value: "value1",
  },
  {
    id: "item-2",
    value: "value2",
  },
  {
    id: "item-3",
    value: "value3",
  },
  {
    id: "item-4",
    value: "value4",
  },
  {
    id: "item-5",
    value: "value5",
  },
];

export default function App() {
  const [chips, setChips] = useState<{ id: string; value: string }[]>(items);

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (over == null || active.id === over.id) {
          return;
        }
        const oldIndex = chips.findIndex((v) => v.id === active.id);
        const newIndex = chips.findIndex((v) => v.id === over.id);
        const newChips = arrayMove(chips, oldIndex, newIndex);
        setChips(newChips);
      }}
    >
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-2">
          <SortableContext
            items={chips.map((v) => v.id)}
            strategy={verticalListSortingStrategy}
          >
            {chips.map((chip) => (
              <SortableItem key={chip.id} id={chip.id}>
                <span>item-{chip.id}</span>
              </SortableItem>
            ))}
          </SortableContext>
        </div>
        <div>test</div>
      </div>
      <DragOverlay>
        <div className="p-2 border rounded-lg bg-orange-200">tests</div>
      </DragOverlay>
    </DndContext>
  );
}
