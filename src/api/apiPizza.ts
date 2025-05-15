export const apiConnect = async (url: string) => {
  return await fetch(`http://localhost:3000/${url}`)
    .then((res) => res.json())
    .then((data) => data);
};
