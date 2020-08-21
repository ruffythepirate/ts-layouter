import {Layouter} from './Layouter';
import {LayoutItem} from './LayoutItem';

let l = new Layouter();

beforeEach(() => {
  l = new Layouter();
});

test('placeItem should place first item in center', () => {
  let item = createItem(20, 20);
  l.placeItem(item, 0, 0);

  expect(item.setX).toHaveBeenCalledWith(-10);
  expect(item.setY).toHaveBeenCalledWith(-10);
});

function createItem(w:number, h:number) : LayoutItem {
  return {
    getWidth: () => w,
    getHeight: () => h,
    setX: jest.fn(),
    setY: jest.fn(),
  } as LayoutItem;
}
