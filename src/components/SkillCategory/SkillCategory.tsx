import React from 'react';

import { Wrapper, Title, List } from './styled';

const data = [
  { title: 'base', list: ['HTML', 'CSS', 'Javascript'] },
  {
    title: 'advanced',
    list: ['React', 'Typescript', 'SASS(SCSS)', 'Styled-Components'],
  },
  { title: 'testing', list: ['Jest', 'testing-library'] },
  { title: 'utils', list: ['git', 'eslint'] },
];

export const SkillCategory = () => {
  return (
    <>
      {data.map(({ title, list }) => (
        <Wrapper key={title}>
          <Title>{title}</Title>
          <List>
            {list.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </List>
        </Wrapper>
      ))}
    </>
  );
};
