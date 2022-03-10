import styled from 'styled-components';

interface WrapperProps {
  $rotate: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 2em;
  color: ${({ theme }) => theme.colors.primary};
  margin-left: auto;
  transform: ${({ $rotate }) => ($rotate ? `rotate(180deg)` : `rotate(0)`)};
`;
