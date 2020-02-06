import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const Container = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 2rem;
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <p>Rendered Ltd {new Date().getFullYear()}</p>
      <p>Made with 💛in London</p>
    </Container>
  </Wrapper>
);

export default Footer;
