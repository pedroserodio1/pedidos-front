import axios, { AxiosError } from "axios";

const endPoint = "http://localhost:3333/session/";

interface ILoginService {
    username: string;
    password: string;
}

const Login = async ({ username, password }: ILoginService) => {
    try {

        const response = await axios({
            method: "post",
            url: `${endPoint}`,
            data: {
                username,
                password
            }
        });

        return response;

    } catch (error) {
        const err = error as AxiosError
        if (err) {
           const data: any = err.response
           return data
        }
        
    }
};

export default Login;
