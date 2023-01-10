import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;

  // 케이스에 따른 분기 설정
  ${(props) => {
    switch (props.type) {
      case 'positive':
        return css`
          background-color: #64c964;
        `;
      case 'negative':
        return css`
          background-color: #fd565f;
        `;
      default:
        return '';
    }
  }}
`;

const Button = ({ text, type, onClick }) => (
  <StyledButton type={type} onClick={onClick}>
    {text}
  </StyledButton>
);

export default Button;
