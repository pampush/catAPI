import React from 'react';
import styled from 'styled-components';

import { Checkbox, Button, CatView } from '../components';
import { useIntervalFetch, useInitFetch } from '../hooks/useFetch';
import { getImageURL } from '../services/getImageAPI';

const CatPageContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: min-content;
`;

function CatPage() {
  const [isLoaded, setIsLoaded] = React.useState(false); // state for loading component view
  const [imgSrc, setImgSrc] = React.useState('');

  const [userInput, setUserInput] = React.useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      'enabled-checkbox': false,
      'autorefresh-checkbox': false,
    },
  );

  useInitFetch(getImage);
  useIntervalFetch(userInput['autorefresh-checkbox'], getImage, 5000);

  async function getImage() {
    setIsLoaded(false);
    const url = await getImageURL();
    setImgSrc(url);
  }

  //
  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.checked;
    setUserInput({ [name]: newValue });
  };    

  //
  const handleButtonClick = async () => {
    setIsLoaded(false);
    const url = await getImageURL();
    setImgSrc(url);
  };

  return (
    <CatPageContainer>
      <Checkbox
        onChange={handleChange}
        name="enabled-checkbox"
        label="Enabled"
        value={userInput['enabled-checkbox']}
      />
      <Checkbox
        onChange={handleChange}
        name="autorefresh-checkbox"
        label="Autorefresh every 5 seconds"
        value={userInput['autorefresh-checkbox']}
      />

      <Button
        onClick={handleButtonClick}
        name="getcat-btn"
        text="Get cat"
        enabled={userInput['enabled-checkbox']}
      />

      <CatView src={imgSrc} isLoaded={isLoaded} handleLoad={() => setIsLoaded(true)} />
    </CatPageContainer>
  );
}

export default CatPage;
