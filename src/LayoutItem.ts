import { Point, Polygon } from 'ts-2d-geometry';

/**
 * Interface for items that has a width and a height, and contains a method that can set their
 * X and Y coordinates.
 */
export interface LayoutItem {
  getHeight: () => number;
  getWidth: () => number;
  setX: (x: number) => void;
  setY: (y: number) => void;
}

/**
 * Creates a polygon entity from a layout item. X and Y coordinates of the top left corner
 * must be specified.
 * @param x
 * The x coordinate of the top left corner.
 * @param y
 * The y coordinate of the top left corner.
 */
export function layoutItemToPolygon(item: LayoutItem, x: number, y:number): Polygon {
  return Polygon.fromPoints([
    new Point(x, y),
    new Point(x + item.getWidth(), y),
    new Point(x + item.getWidth(), y + item.getHeight()),
    new Point(x, y + item.getHeight()),
  ]);
}
