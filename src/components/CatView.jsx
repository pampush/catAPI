import React from 'react';

import styled from 'styled-components';

import LoadingIcon from '../assets/loading.gif';

const CatImage = styled.img.attrs(({ src }) => ({
  height: '300px',
  width: '300px',
  alt: 'cute cat',
  src,
}))`
  display: block;
  height: 300px;
  width: 300px;
`;

const LoadingImage = styled.img.attrs(({ src }) => ({
  height: '200px',
  width: '200px',
  alt: 'image is loading',
  src,
}))`
  display: block;
  background: white;
  position: absolute;
  height: 300px;
  width: 300px;
  top: 0;
  left: 0;
`;

const ViewContainer = styled.div`
  position: relative;
  justify-self: center;
`;

function CatView({ src, isLoaded, handleLoad }) {
  return (
    <ViewContainer>
      <CatImage src={src} onLoad={handleLoad} />
      {!isLoaded && <LoadingImage src={LoadingIcon} />}
    </ViewContainer>
  );
}

export default CatView;
