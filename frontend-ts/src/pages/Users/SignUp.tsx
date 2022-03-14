import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Typography } from '@mui/material';
// import { userSignUp } from '../../lib/api/api';
import axios from 'axios'
import { useForm } from "react-hook-form";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`

const Box = styled.div`
  max-width: 500px;
  width: 100%;
  text-align: center;
`

const Spacer = styled.div`
  margin-top: 30px;
`
const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [inputs, setInputs] = useState({
    userId: '',
    passwd: '',
    passwdCheck: '',
    name: '',
    nickName: '',
    gender: '',
    email: '',
    phone: '',
  })

  const onChange = (e: any) => {
    const { value, name} = e.target
    setInputs({
      ...inputs,
      [name] : value
    })
  }

  const onClickSignUp = () => {
  //   userSignUp({ userId : inputs.userId, passwd:inputs.passwd, name: inputs.name})
  //   .then(res => {
  //     console.log('res', res)
  //   })
  //   .catch(err => {
  //     console.log('err', err)
  //   })
  //   // .then(res => {
  //   //   console.log('res',res)
  //   // })
  //   // .catch(err => {
  //   //   console.log('err', err)
  //   // })
    axios.post('http://localhost:8080/traview/user/signUp',{
      userId : inputs.userId, 
      passwd:inputs.passwd, 
      name: inputs.name
    })
    .then(res => {
      console.log('res',res)
    })
    .catch(err => {
      console.log('err', err)
    })
  }

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const isValidUserId = inputs.userId.length < 1;

  return(
    console.log(inputs),
    <Container>
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold' }}>Traview 회원가입</Typography>
        <Spacer />
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextField 
            fullWidth 
            {...register("firstName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i
            })}
            error={isValidUserId}
            helperText={isValidUserId ? "" : "아이디는 필수 값 입니다."}
            id="outlined-basic" 
            label="아이디(필수)" 
            variant="outlined" 
            name="userId"
            value={inputs.userId}
            onChange={onChange}
          />
        {errors?.firstName?.type === "required" && <p>This field is required</p>}
        {errors?.firstName?.type === "maxLength" && (
          <p>First name cannot exceed 20 characters</p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p>Alphabetical characters only</p>
        )}
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="비밀번호" 
            variant="outlined"
            name="passwd"
            type="password"
            value={inputs.passwd}
            onChange={onChange} 
          />
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="비밀번호 확인" 
            variant="outlined"
            name="passwdCheck"
            type="password"
            value={inputs.passwdCheck}
            onChange={onChange} 
          />
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="이름(필수)" 
            variant="outlined"
            name="name"
            value={inputs.name}
            onChange={onChange} 
          />
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="닉네임" 
            variant="outlined" 
            name="nickName"
            value={inputs.nickName}
            onChange={onChange}
          />
          {/* 성별 */}
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="성별" 
            variant="outlined" 
            name="gender"
            value={inputs.gender}
            onChange={onChange}
          />
          {/* 생년월일 */}
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="이메일" 
            variant="outlined" 
            name="email"
            value={inputs.email}
            onChange={onChange}
          /> 
          <Spacer />
          <TextField 
            fullWidth 
            id="outlined-basic" 
            label="휴대폰" 
            variant="outlined" 
            name="email"
            value={inputs.phone}
            onChange={onChange}
          />
          <Spacer />
          <Button
            fullWidth
            variant="outlined"
            onClick={onClickSignUp}
            sx={{ 
              borderColor: 'orange', 
              color: 'orange', 
              height: 50, 
              '&:hover': {
              borderColor: 'orange'
            }}
          }
          >
            회원가입
          </Button>
          <input type="submit" />
        </form>
      </Box>
    </Container>
  )
}

export default SignUp