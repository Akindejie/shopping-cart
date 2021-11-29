import * as React from 'react';
import CartItems from '../CartItems/CartItems';

//* Types
import { CartItemType } from '../../App';

//* Styles
import styled from 'styled-components';

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFormCart: (id: number) => void;
};

const Carts: React.FC<Props> = ({ cartItems, addToCart, removeFormCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in your cart.</p> : null}
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFormCart={removeFormCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};
export default Carts;

const Wrapper = styled.aside`
  width: 500px;
  padding: 20px;
`;
