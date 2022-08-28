import styled from "styled-components";

const Navigation = () => {
return <Navigationstyled>
    {/* Navigation */}
    <div>코멘토 쇼핑</div>
</Navigationstyled>;    
};

const Navigationstyled = styled.div`
width: 87px;
height: 26px;
left: 152px;
top: 20px;

font-weight: 700;
font-size: 18px;
line-height: 26px;

display: flex;
align-items: center;
text-align: center;
`;

export default Navigation;