
/**
 * Interface for items that has a width and a height, and contains a method that can set their X and Y coordinates.
 */
export interface LayoutItem {
  getHeight: () => number,
  getWidth: () => number,
  setX: (x: number) => void,
  setY: (y: number) => void 
}
