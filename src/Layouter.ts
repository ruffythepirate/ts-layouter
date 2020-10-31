import { Polygon, point } from 'ts-2d-geometry';
import { LayoutItem, layoutItemToPolygon } from './LayoutItem';
import { Optional, none, some } from '@ruffy/ts-optional';

/**
 * Class that handles layout. You add items implementing the LayoutItem interface to the layout,
 * and the class will incrementally call setX, setY on the added items.
 */
export class Layouter {

  private layoutShape: Optional<Polygon>;

  constructor() {
    this.layoutShape = none;
  }

  /**
   * Places the given layout item as close to the given point as possible, without overlapping any
   * of the present layout items.
   */
  placeItem(item: LayoutItem, centerX:number, centerY: number): void {
    if (this.layoutShape.isEmpty()) {
      const x = centerX - item.getWidth() / 2;
      const y = centerY - item.getHeight() / 2;
      item.setX(x);
      item.setY(y);
      this.layoutShape = some(layoutItemToPolygon(item, x, y));
    } else {
      this.layoutShape.foreach(layoutShape => {
        const centerPoint = point(centerX, centerY);
        const closestPoint = layoutShape.closestPoint(centerPoint);
        const direction = closestPoint.minus(centerPoint);
        let newForm = layoutItemToPolygon(item, closestPoint.x, closestPoint.y);
        while(layoutShape.overlap(newForm)) {
          // 1. find intercepting point
          // 2. move line segment of intercepting point in direction until it doesn't intercept.
          // How do you move one line segment in a direction until it doesn't intercept anymore. Either most distant endpoint needs to be projected onto line, or it might be finished before this, if you project he other lines endpoint onto your line and move. whichever moves the shortest distance. This might create a problem with the overlap, because the line segments might still overlap in a junction.
          // 3. back to start of while.
          newForm = newForm.transpose(direction.x, direction.y);

        }
      });
    }
  }

}
