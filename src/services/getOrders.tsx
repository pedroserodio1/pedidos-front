import axios from "axios";
import getProduct from "./getProduct";

const endPoint = "http://localhost:3333/orders/";

const getOrder = async (token: string | null) => {
  try {
    const response = await axios({
      method: "get",
      url: `${endPoint}`,
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    });

    
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getOrder;
