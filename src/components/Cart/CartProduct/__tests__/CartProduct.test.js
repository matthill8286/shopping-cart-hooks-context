import CartProduct from '../';

const productMock = {
  id: 13,
  title: 'Dark Green Runner Beans',
  description: 'Yummy green beans',
  price: 2.45,
  currencyId: 'GBP',
  currencyFormat: '£'
};

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <CartProduct
      product={productMock}
      removeProduct={() => { }}
      conversion={{ value: 1, currencyId: 'GBP' }} />
  );
});

afterEach(() => {
  wrapped.unmount();
});

describe('CartProduct', () => {
  it('append class shelf-item--mouseover when mouseover x button', () => {
    expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
      false
    );
    wrapped.find('.shelf-item__del').simulate('mouseover');
    expect(wrapped.find('.shelf-item').hasClass('shelf-item--mouseover')).toEqual(
      true
    );
  });
});

