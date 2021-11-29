//* Styles
import { Button } from '@mui/material';
import styled from 'styled-components';

//* Types
import { CartItemType } from '../../App';

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Items: React.FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);
export default Items;

//* Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 20px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 200px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    padding: 1rem;
    height: 100%;
  }

  h3 {
    font-style: bold;
  }
`;
