import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/images/back2.jpeg';
import { Typography, TextField, Button } from '@mui/material';
import Spacer from '../../components/common/Spacer';
import { useNavigate } from 'react-router-dom';
import { memberLogin } from '../../modules/api/api';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Box = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px #000000;
`;

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    userId: '',
    passwd: '',
  });

  const onInputChange = (e: any) => {
    const { value, name, id } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickLogin = () => {
    console.log('Login');
    memberLogin({
      userId: inputs.userId,
      userPw: inputs.passwd,
    })
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <Container>
      <Box>
        <Typography variant="h3" sx={{ fontSize: 25, fontWeight: 'bold' }}>
          Traview
        </Typography>
        <Spacer top={10} />
        <Typography variant="body1" sx={{ fontSize: 20 }}>
          로그인
        </Typography>
        <Spacer top={10} />
        <TextField
          fullWidth
          id="userId"
          label="아이디"
          variant="outlined"
          name="userId"
          value={inputs.userId}
          onChange={onInputChange}
        />
        <Spacer top={10} />
        <TextField
          fullWidth
          id="passwd"
          label="비밀번호"
          variant="outlined"
          name="passwd"
          type="password"
          value={inputs.passwd}
          onChange={onInputChange}
        />
        <Spacer top={10} />
        <Button
          fullWidth
          variant="outlined"
          onClick={onClickLogin}
          sx={{
            borderColor: '#32a852',
            color: '#32a852',
            height: 50,
            '&:hover': {
              borderColor: '#32a852',
            },
          }}
        >
          로그인
        </Button>
        <Spacer top={10} />
        <Button
          fullWidth
          variant="outlined"
          onClick={() => navigate('/signup')}
          sx={{
            borderColor: '#32a852',
            color: '#32a852',
            height: 50,
            '&:hover': {
              borderColor: '#32a852',
            },
          }}
        >
          회원가입
        </Button>
        <Spacer top={10} />
      </Box>
    </Container>
  );
};

export default Login;
