import styled from 'styled-components';

const Layout = styled.div`
  min-height: 100vh;
  padding: 0 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 650px) {
    width: 650px;
  }

  @media (max-width: 650px) {
    width: 90vw;
  }
`;

export default Layout;
