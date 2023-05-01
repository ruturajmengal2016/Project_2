export const getUsers = () => {
  const users = localStorage.getItem("users");
  return JSON.parse(users)
};
