

export const productSearched = (products, serachInputValue, selectedLocation) => {
  let value = serachInputValue.toLowerCase();

  if (selectedLocation === 'all') {
    return products.filter(({ name, title }) => name.toLowerCase().includes(value) || title.toLowerCase().includes(value));
  } else {
    const locationSpecificSearch = products.filter(({ location }) => location === selectedLocation);
    return locationSpecificSearch.filter(({ name, title }) => name.toLowerCase().includes(value) || title.toLowerCase().includes(value));
  }


}

export const searchByState = (products, InputValue) => {
  return InputValue === 'all' ?
    products :
    products.filter(product => product.location === InputValue)
}
