import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5em 0;
  margin-bottom: 2em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3em;
  font-style: italic;
`;
