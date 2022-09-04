import styled from "styled-components";

const ThemeButton = ({ themeName, onClick }) => {
  return <ThemeButtonStyled onClick={onClick}>{themeName}</ThemeButtonStyled>;
};

const ThemeButtonStyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: fit-content;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  padding: 24px 16px;
  color: white;
`;

export default ThemeButton;
