const accessToken = localStorage.getItem("user.accessToken");

const privateAxios = axios.create({
  baseURL: "localhost:5000/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
