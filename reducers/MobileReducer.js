export default (state = null, action) => {
  switch (action.type) {
    case 'save_mobile':
      return action.payload;
    default:
      return state;
  }
};
