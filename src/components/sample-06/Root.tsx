import DndProvider from "./provider/dnd";
import { createMenu } from "./util/create-menu";

export default function Root() {
  const menus = createMenu(10);

  return (
    <DndProvider>
      <div className="grid grid-cols-2 gap-10 border-1 p-8 rounded-lg">
        <div>
          <ul className="flex flex-col gap-2">
            {menus.map((menu) => (
              <li
                className="border-1 rounded-lg p-2 cursor-pointer hover:border-red-500"
                key={menu.id}
              >
                {menu.label}
              </li>
            ))}
          </ul>
        </div>
        <div className="border-1 rounded-lg min-w-[500px] bg-gray-700 opacity-40" />
      </div>
    </DndProvider>
  );
}
