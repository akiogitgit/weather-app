export const dateFormat = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString().split("/").join("-");
};
