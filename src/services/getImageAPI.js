/**
 * Specific API for cat images fetching
 * @returns url of image 
 */
const catAPI = async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  return data[0]['url'];
};

/**
 * Pass arbitrary APIs to that function to get image URL getters.
 * Dependency inversion.
 * @param {*} apiCallback 
 * @returns 
 */
const _getImageURL = (apiCallback) => async () => {
  const url = await apiCallback();
  return url;
};

const getImageURL = _getImageURL(catAPI);

export { getImageURL };
