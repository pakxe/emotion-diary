import styled, { css } from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #e2e2e2;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  font-size: 18px;
  font-weight: bold;
`;

const Child = styled.div`
  ${(props) => {
    switch (props.direction) {
      case 'left':
        return css`
          justify-content: start;
        `;
      case 'right':
        return css`
          justify-content: end;
        `;
      default:
        return '';
    }
  }}
  display: flex;
  width: 25%;
`;

const Header = ({ left, right, title }) => (
  <HeaderContainer>
    <Child direction='left'>{left}</Child>
    <Title>{title}</Title>
    <Child direction='right'>{right}</Child>
  </HeaderContainer>
);

export default Header;
