import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2em;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 0.5em;
  }

  &:not(:last-child) {
    margin-bottom: 1.5em;
  }
`;

export const Title = styled.div`
  font-size: 1.25em;
  width: 240px;
  flex-shrink: 0;
`;

export const List = styled.ul`
  li {
    display: inline-flex;
    padding: 0.25em 0.5em;
    background-color: ${({ theme }) => theme.colors.highlight};
    border-radius: 3px;
    margin-bottom: 0.25em;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;
