import {
  Aside,
  Container,
  Header,
  MainContainer,
  MainContent,
  Stories,
} from "./styles";
import Feed from "./components/Feed";

const Home = () => {
  return (
    <>
      <Container>
        <Header>
          <h1>Header</h1>
        </Header>
        <MainContainer>
          <MainContent>
            <Stories>
              <h1>Stories</h1>
            </Stories>
            <Feed />
          </MainContent>
          <Aside>
            <h1>Account</h1>
          </Aside>
        </MainContainer>
      </Container>
    </>
  );
};

export default Home;
