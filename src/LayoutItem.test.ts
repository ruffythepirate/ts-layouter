import { LayoutItem, layoutItemToPolygon } from './LayoutItem';
import { Polygon, Point } from 'ts-geometry-visualizer';

test('layoutItemToPolygon should create well shaped polygon', () => {
  const pol = layoutItemToPolygon(createItem(40, 20), 5, 5);

  expect(pol).toEqual(polygon([[5, 5], [45, 5], [45, 25], [5, 25]]));
});

function polygon(points: number[][]) {
  const p = points.map(num => new Point(num[0], num[1]));
  return Polygon.fromPoints(p);
}

function createItem(w:number, h:number) : LayoutItem {
  return {
    getWidth: () => w,
    getHeight: () => h,
    setX: jest.fn(),
    setY: jest.fn(),
  } as LayoutItem;
}
