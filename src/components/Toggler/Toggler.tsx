import React from 'react';
import { useRecoilState } from 'recoil';

import { activeTheme, Themes } from '../../store';

import { Wrapper } from './styled';

export const Toggler = () => {
  const { NORMAL, REVERSE } = Themes;
  const [active, setActive] = useRecoilState(activeTheme);
  const changeTheme = () => setActive(prevState => (prevState === NORMAL ? REVERSE : NORMAL));

  return (
    <Wrapper onClick={changeTheme} $rotate={active === REVERSE}>
      &#9786;
    </Wrapper>
  );
};
