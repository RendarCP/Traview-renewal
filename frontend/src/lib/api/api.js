import React from 'react';
import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost:8080`,
  //withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const userSignUp = async ({ userId, email, passwd, name, gender}) => { 
  const response = await apiClient.post(`/api/register`, {
    userId,
    email,
    passwd,
    name,
    gender
  })
  
  return response.data;

}