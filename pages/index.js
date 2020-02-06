import styled from 'styled-components';
import Footer from '../components/footer/Footer';
import Illustrations from '../components/hero/Illustrations';
import Section from '../components/feature/Section';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 4rem;
  margin-top: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    margin-top: 3rem;
    font-size: 5rem;
  }
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Homepage = () => (
  <>
    <main>
      <Hero>
        <Title>Rendered</Title>
        <h2>We specialise in improving brands online.</h2>
      </Hero>
      <Illustrations />
      <Section />
    </main>
    <Footer />
  </>
);

export default Homepage;
