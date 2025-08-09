import { v4 } from "uuid";

export const createMenu = (size: number) => {
  return Array.from({ length: size }).map((_, i) => ({
    id: v4(),
    label: `label-${i}`,
  }));
};
