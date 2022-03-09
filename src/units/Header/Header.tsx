import React from 'react';

import { Container } from '../../components';
import { Smile } from '../../icons';

import { Wrapper, Title } from './styled';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Dmitriy Aksenov</Title>
        <button>
          <Smile />
        </button>
      </Container>
    </Wrapper>
  );
};
