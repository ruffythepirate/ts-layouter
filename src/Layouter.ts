import { Polygon } from 'ts-2d-geometry';
import { LayoutItem } from './LayoutItem';
/**
 * Class that handles layout. You add items implementing the LayoutItem interface to the layout,
 * and the class will incrementally call setX, setY on the added items.
 */
export class Layouter {

  /**
   * Places the given layout item as close to the given point as possible, without overlapping any
   * of the present layout items.
   */
  placeItem(item: LayoutItem, centerX:number, centerY: number): void {
    item.setX(centerX - item.getWidth() / 2);
    item.setY(centerY - item.getHeight() / 2);
  }

}
