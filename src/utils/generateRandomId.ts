  const generateRandomId = () => {
    let min = 1;
    let max = 150;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  export default generateRandomId;