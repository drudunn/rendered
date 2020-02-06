import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  width: 75%;
  margin-bottom: 5rem;
  position: relative;
`;

const Woman = styled.img`
  position: relative;
  z-index: 1;
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    left: 2rem;
  }
`;

const Profile = styled.div`
  position: absolute;
  left: calc(50% - 0px);
  top: 0%;
  width: 50vw;
  overflow: hidden;
  transition: left .5s ease;
  transition: width .25s ease;

  @media (min-width: 500px) {
    left: calc(50% - 1rem);
  }

  @media (min-width: 600px) {
    left: calc(50% - 2rem);
  }
`;

const Illustrations = () => (
  <Wrapper>
    <Woman src="/illustrations/woman-phone.svg" />
    <Profile>
      <img src="/illustrations/profile.svg" />
    </Profile>
  </Wrapper>
);

export default Illustrations;
