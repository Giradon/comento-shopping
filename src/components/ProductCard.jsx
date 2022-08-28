import styled from "styled-components";
const ProductCard = ({name, description, thumbnail}) => {
    return(
        <div>
            <img
            width="200" 
            src={thumbnail}
            alt={name}
            />
            <h3>{name}</h3>
            <a>
                {description}
            </a>
        </div>
    );
};

const h3 = styled.h3`
    padding-top: 12px;
    padding-bottom: 12px;
    font-weight: 700;
    font-size: 20px;
`

const a = styled.a`
    font-weight: 400;
    font-size: 16px;
    
`

export default ProductCard;

