import axios from 'axios';

export const memberSignUp = async ({ userId, userPw, userNm, nickname, birthday, gender, email, phone}: any ) => {
  try {
    const response = await axios.post(`http://localhost:8080/traview/user/signUp`,{
      userId,userPw,nickname,birthday,gender,email,phone
    });

    if (response.data) {
      return response;
    }

    throw new Error("fail");
  } catch (error:any) {
    throw new Error(error);
  }
};