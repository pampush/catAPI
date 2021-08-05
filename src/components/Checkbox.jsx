import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.input.attrs((props) => ({
  type: 'checkbox',
  id: props.name,
}))``;

const Label = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))``;

const CheckboxContainer = styled.div`
  & > *:first-child {
    margin-right: 10px;
  }
`;

function Checkbox(props) {
  return (
    <CheckboxContainer>
      <StyledCheckbox {...props} />
      <Label htmlFor={props.name}>{props.label}</Label>
    </CheckboxContainer>
  );
}

export default Checkbox;
