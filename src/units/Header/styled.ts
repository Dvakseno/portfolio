import styled from 'styled-components';

import { Container } from '../../components';

export const Wrapper = styled.header`
  padding: 1.5em 0;
  margin-bottom: 2em;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75em;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3em;
  letter-spacing: 0.025em;
`;

export const CustomContainer = styled(Container)`
  display: flex;
`;
