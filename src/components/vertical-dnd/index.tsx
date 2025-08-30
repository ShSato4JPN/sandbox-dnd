import {
  closestCenter,
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { motion } from "framer-motion";
import { useState } from "react";
import SortableItem from "./SortableItem";

type Item = {
  id: string;
  value: string;
  description: string;
};

const items: Item[] = [
  {
    id: "item-1",
    value: "value1",
    description: "description-1",
  },
  {
    id: "item-2",
    value: "value2",
    description: "description-2",
  },
  {
    id: "item-3",
    value: "value3",
    description: "description-3",
  },
  {
    id: "item-4",
    value: "value4",
    description: "description-4",
  },
  {
    id: "item-5",
    value: "value5",
    description: "description-5",
  },
];

export default function Root() {
  const [chips, setChips] = useState<Item[]>(items);
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );

  const sensors = useSensors({
    sensor: PointerSensor,
    options: {
      activationConstraint: {
        distance: 8, // 8px動かしたらドラッグ開始
      },
    },
  });

  return (
    <DndContext
      sensors={sensors}
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
      <div className="flex flex-col gap-4">
        {selectedDescription !== null && (
          <div>
            <h1>{selectedDescription}</h1>
          </div>
        )}
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-2">
            <SortableContext
              items={chips.map((v) => v.id)}
              strategy={verticalListSortingStrategy}
            >
              {chips.map((chip) => (
                <SortableItem
                  key={chip.id}
                  id={chip.id}
                  isSelected={selectedChip === chip.id}
                  handleClick={() => setSelectedChip(chip.id)}
                >
                  <span>item-{chip.id}</span>
                </SortableItem>
              ))}
            </SortableContext>
          </div>
          <motion.div 
            className="flex flex-row gap-10"
            layout
          >
            {chips.map((v) => (
              <motion.div
                key={v.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                  layout: { 
                    duration: 0.3,
                    ease: "easeInOut"
                  },
                  opacity: { duration: 0.2 }
                }}
                className="grid place-items-center p-4 border-dashed border rounded-lg cursor-pointer"
                onClick={() => setSelectedDescription(v.description)}
              >
                {v.value}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <DragOverlay>
        <div className="p-2 border rounded-lg bg-orange-200">tests</div>
      </DragOverlay>
    </DndContext>
  );
}
