import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const Header = styled.header`
  height: 60px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #333;
  color: white;
`;

export const MainContainer = styled.main`
  width: 1440px;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.BACKGROUND};
  color: ${(props) => props.theme.BLACK};

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const Stories = styled.div`
  width: 98%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #333;
  color: white;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 320px;
  height: 800px;

  background: #333;
  color: white;

  padding: 15px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
