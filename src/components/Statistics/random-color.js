const randomColor = () => {
  const r = Math.round(Math.random() * 12);
  const g = Math.round(Math.random() * 60);
  const b = Math.round(Math.random() * 56);
  return `rgb(${r}, ${g}, ${b})`;
};

export default randomColor;