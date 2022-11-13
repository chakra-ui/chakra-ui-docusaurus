const isImageExisting = (url: string) => {
  try {
    require(`@site/static/img/${url}`).default;
    return true;
  } catch (err) {
    return false;
  }
};

export default isImageExisting;
