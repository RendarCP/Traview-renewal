import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
// import { userSignUp } from '../../lib/api/api';
import axios from 'axios'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`

const Box = styled.div`
  width: 500px;
  text-align: center;
`

const Spacer = styled.div`
  margin-top: 30px;
`
const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    userId: '',
    passwd: '',
    passwdCheck: '',
    name: '',
    nickName: '',
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
  //   // axios.post('http://localhost:8080/api/register',{
  //   //   userId : inputs.userId, 
  //   //   passwd:inputs.passwd, 
  //   //   name: inputs.name
  //   // })
  //   // .then(res => {
  //   //   console.log('res',res)
  //   // })
  //   // .catch(err => {
  //   //   console.log('err', err)
  //   // })
  }


  return(
    console.log(inputs),
    <Container>
      <Box>
        <strong style={{ textAlign: 'center', fontSize: 20 }}>회원가입 페이지</strong>
        <Spacer />
        <TextField 
          fullWidth 
          id="outlined-basic" 
          label="아이디" 
          variant="outlined" 
          name="userId"
          value={inputs.userId}
          onChange={onChange}
        />
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
          label="이름" 
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
        {/* 이미지부분 */}
        {/* 성별 */}
        {/* 생년월일 */}
        <Spacer />
        <Button
          fullWidth
          variant="outlined"
          onClick={onClickSignUp}
          sx={{ borderColor: 'orange', color: 'orange', height: 50}}
        >
          회원가입
        </Button>
      </Box>
    </Container>
  )
}

export default SignUp