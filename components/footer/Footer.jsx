import styled from 'styled-components';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const Container = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 3rem 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    font-size: 0.75rem;
    margin: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    padding: 3rem 0;
  }
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <p>Rendered Ltd &copy; {new Date().getFullYear()}</p>
      <p>Made with 💛in London</p>
    </Container>
  </Wrapper>
);

export default Footer;
