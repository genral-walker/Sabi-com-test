

export const searchByName = (text, state) => {
  return {
    ...state,
    products: state.products.name.toLowerCase().includes(text) || state.products.title.toLowerCase().includes(text)
  }
}

export const searchByLocation = (text, state) => {
  return {
    ...state,
    products: state.products.filter(product => product.location.includes(text))
  }
};

export const updateLocation = (location, state) => {
  return {
    ...state,
    location: location
  }
};

export const updateSearch = (search, state) => {
  console.log('working');
  return {
    ...state,
    search: search
  }
};
