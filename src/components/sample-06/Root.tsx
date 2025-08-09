import DraggableMenuItem from "./components/draggable-menu-item";
import DndProvider from "./provider/dnd";
import { createMenu } from "./util/create-menu";

function DraggableMenu() {
  const menus = createMenu(10);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {menus.map((menu) => (
          <DraggableMenuItem {...menu} />
        ))}
      </div>
    </div>
  );
}

function DroppableArea() {
  return (
    <div className="border-1 rounded-lg min-w-[500px] bg-gray-700 opacity-40" />
  );
}

export default function Root() {
  return (
    <DndProvider>
      <div className="grid grid-cols-2 gap-10 border-1 p-8 rounded-lg">
        <DraggableMenu />
        <DroppableArea />
      </div>
    </DndProvider>
  );
}
