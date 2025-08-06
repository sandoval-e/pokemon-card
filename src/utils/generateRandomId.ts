  const generateRandomId = () => {
    const min = 1;
    const max = 150;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  export default generateRandomId;