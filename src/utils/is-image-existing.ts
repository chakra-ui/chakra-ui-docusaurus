const isImageExisting = (url: string) => {
  const img = new Image();
  img.src = url;
  return img.height !== 0;
};

export default isImageExisting;