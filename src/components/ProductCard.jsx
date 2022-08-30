import styled from "styled-components";
const ProductCard = ({ name, description, thumbnail }) => {
  return (
    <div>
      <img width="200" src={thumbnail} alt={name} />
      <ProductName>{name}</ProductName>
      <ProductDesc>{description}</ProductDesc>
    </div>
  );
};

const ProductName = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-bottom: 20px;
`;

const ProductDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  padding-bottom: 20px;
`;

export default ProductCard;
