import axios from "axios";

const endPoint = "http://localhost:3333/users/logged";

const getUserLogged = async (token: string | null) => {
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

export default getUserLogged;
