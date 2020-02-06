import styled from 'styled-components';

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
  text-align: ${props => (props.centered ? 'center' : 'left')};
`;

const Link = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  width: fit-content;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin: 2rem auto;
  display: block;
  text-decoration: none;
`;

const Blurb = styled.p`
  max-width: 360px;
  margin: 0 auto;
`;

const Section = () => (
  <Feature background>
    <Container centered>
      <h3>Talk to us</h3>
      <Blurb>
        We offer Design, Development and Video services. Get in touch with us to
        discuss your project
      </Blurb>
      <Link
        href="https://rendered.typeform.com/to/k1cxma"
        target="_blank"
        rel="noopener"
      >
        Contact us
      </Link>
    </Container>
  </Feature>
);

export default Section;
