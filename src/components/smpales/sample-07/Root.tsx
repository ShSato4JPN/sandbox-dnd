import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DndProvider from "./provider/dnd";

export default function Root() {
  const { setNodeRef, listeners, attributes } = useSortable({ id: "test" });

  return (
    <DndProvider>
      <SortableContext
        items={[1, 2, 3, 4, 5]}
        strategy={verticalListSortingStrategy}
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-2">
          <div className="grid grid-cols-subgrid gap-2">
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
          <div className="grid grid-cols-subgrid gap-2">
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
          <div className="grid grid-cols-subgrid gap-2">
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </SortableContext>
    </DndProvider>
  );
}
