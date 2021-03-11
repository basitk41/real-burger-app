import Axios from "axios";

const axiosOrders = Axios.create({
  baseURL: "https://real-burger-app-fdc29-default-rtdb.firebaseio.com/",
});
export default axiosOrders;
