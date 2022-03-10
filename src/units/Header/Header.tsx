import React from 'react';
import { useRecoilState } from 'recoil';

import { activeTheme } from '../../store/active-theme';
import { Toggler } from '../../components';

import { Wrapper, Title, Introduction, CustomContainer } from './styled';

export const Header = () => {
  const [active, setActive] = useRecoilState(activeTheme);
  const changeTheme = () => setActive(prevState => (prevState === 'normal' ? 'reverse' : 'normal'));
  return (
    <Wrapper>
      <CustomContainer>
        <Introduction>
          <span>
            <strong>Hello</strong>, I am
          </span>
          <Title>Dmitriy Aksenov</Title>
          <span>React developer</span>
        </Introduction>
        <Toggler />
      </CustomContainer>
    </Wrapper>
  );
};
