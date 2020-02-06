import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 0 auto;
  width: 75%;
  margin-bottom: 5rem;
`;

const Woman = styled.img`
  position: relative;
  z-index: 1;
`;

const Profile = styled.img`
  position: absolute;
  margin-left: -2.5rem;
`;

const Illustrations = () => (
  <Wrapper>
    <Woman src="/illustrations/woman-phone.svg" />
    <Profile src="/illustrations/profile.svg" />
  </Wrapper>
);

export default Illustrations;
