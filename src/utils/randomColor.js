const randomColor = () => {
    return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
      (Math.random() * 255) << 0
    })`;
  };
  export default randomColor;