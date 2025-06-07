import { useQuery } from "@tanstack/react-query";
import { AxiousURL } from "./useAxious";
 
 import React from 'react';
// import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
 
 const Usejwt = () => {
// const {user}=useContext(AuthContext)
const { refetch, data: jwttoken = [] } = useQuery({
    queryKey: ["jwttoken"],
    queryFn: async () => {
      const result = await AxiousURL.get("/jwt");
      return refetch, result.data;
    },
  });

const postJwt = async(user)=>{
    console.log(user);
const result = await AxiousURL.post('/jwt',user)
console.log(result);
return  result.data
}

console.log(jwttoken);
    return   {jwttoken,postJwt}
    
 };
 
 export default Usejwt;