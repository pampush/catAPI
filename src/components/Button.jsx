import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button.attrs((props) => ({
  disabled: !props.enabled,
}))`
  margin: 0;
  padding: 10px 0;
`;

function Button({ text, ...props }) {
  return <StyledButton {...props}>{text}</StyledButton>;
}

export default Button;
