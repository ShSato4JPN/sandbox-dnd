import { v4 } from "uuid";

export type MenuItem = { id: string; label: string };

export const createMenu = (size: number): MenuItem[] => {
  return Array.from({ length: size }).map((_, i) => ({
    id: v4(),
    label: `label-${i}`,
  }));
};
