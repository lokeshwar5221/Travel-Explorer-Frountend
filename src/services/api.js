import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-explore-backend-umln.onrender.com/"
});

export default api;