import { Layouter } from './Layouter';
import { LayoutItem } from './LayoutItem';

let l = new Layouter();

let lastItem = createItem(0, 0);

beforeEach(() => {
  l = new Layouter();
});

test('placeItem should place first item in center', () => {
  const item = createItem(20, 20);
  l.placeItem(item, 0, 0);

  expect(item.setX).toHaveBeenCalledWith(-10);
  expect(item.setY).toHaveBeenCalledWith(-10);
});

test('placeItem should place second items as close as possible', () => {
  l.placeItem(createItem(20, 20), 0, 0);
  l.placeItem(createItem(20, 20), 5, 0);

  expect(lastItem.setX).toHaveBeenCalledWith(10);
  expect(lastItem.setY).toHaveBeenCalledWith(10);

});

function createItem(w:number, h:number) : LayoutItem {
  lastItem = {
    getWidth: () => w,
    getHeight: () => h,
    setX: jest.fn(),
    setY: jest.fn(),
  } as LayoutItem;

  return  lastItem;
}
