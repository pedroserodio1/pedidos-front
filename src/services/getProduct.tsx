import axios from "axios";

const endPoint = "http://localhost:3333/products";

const getProduct = async (token: string | null, productId: string) => {

//    console.log(productId);
    
    
  try {
    const response = await axios({
      method: "get",
      url: `${endPoint}/${productId}`,
      headers: {
        Authorization:
          `Bearer ${token}`,
      },
    });

    
    return response.data;
  } catch (err) {
    // console.log('err');
  }
};

export default getProduct;
