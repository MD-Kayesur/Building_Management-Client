import axios from "axios";

 
 export const AxiousURL = axios.create({
    baseURL:'http://localhost:4000',
    // withCredentials:true,
    // baseURL:'https://building-management-server-two.vercel.app',
    timeout:5000
})
const useAxious = () => {
    return  AxiousURL
};

export default useAxious;