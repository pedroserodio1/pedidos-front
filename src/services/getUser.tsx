import axios from "axios";

const endPoint = "http://localhost:3333/users";

const getUser = async (token: string | null, id: string) => {
  try {
    const response = await axios({
      method: "get",
      url: `${endPoint}/${id}`,
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

export default getUser;