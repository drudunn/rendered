import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Illustrations from '../components/hero/Illustrations';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 5rem;
  }
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Feature = styled.section`
  background: ${({ background, theme }) =>
    background ? theme.colors.background : 'none'};
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  padding: 2rem 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 3rem 2rem;
  }
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;

const Homepage = () => (
  <>
    <main>
      <Hero>
        <Title>Rendered</Title>
        <h2>We specialise in improving brands online.</h2>
      </Hero>
      <Illustrations />
      <Feature background>
        <Container>
          <p>We offer Design, Development and Video services.</p>
        </Container>
      </Feature>
    </main>
    <Footer />
  </>
);

export default Homepage;
