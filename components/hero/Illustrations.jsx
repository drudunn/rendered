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
`;

const Profile = styled.div`
  position: absolute;
  left: 46%;
  top: 0%;
  width: 52vw;
  overflow: hidden;
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
