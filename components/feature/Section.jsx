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
`;

const CenteredTitle = styled.h3`
  text-align: center;
`;

const Section = () => (
  <Feature background>
    <Container>
      <CenteredTitle>
        We offer Design, Development and Video services
      </CenteredTitle>
    </Container>
  </Feature>
);

export default Section;
