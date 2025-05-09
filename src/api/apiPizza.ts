export const apiConnect = async () => {
  return await fetch("http://localhost:3000/pizza")
    .then((res) => res.json())
    .then((data) => data);
};
