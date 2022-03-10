import React, { FC } from 'react';

import { Container } from '../Container';

import { Wrapper } from './styled';

export const Section: FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
