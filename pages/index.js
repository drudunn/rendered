import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.75rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 5rem;
  }
`;

const Homepage = () => (
  <main>
    <Title>Rendered Ltd</Title>
    <h2>Professional Creative Services</h2>
    <p>We specialise in improving brands.</p>
    <p>We offer Design, Development and Video services.</p>
  </main>
);

export default Homepage;
