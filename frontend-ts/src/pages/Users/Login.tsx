import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../static/images/back2.jpeg';
import { Typography, TextField, Button } from '@mui/material';
import Spacer from '../../components/common/Spacer';

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
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    userId: '',
    passwd: '',
  });

  const onClickLogin = () => {
    console.log('Login');
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
          id="userid"
          label="아이디"
          variant="outlined"
          name="userid"
          type="userid"
          value={inputs.userId}
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
        />
        <Spacer top={10} />
        <Button
          fullWidth
          variant="outlined"
          onClick={onClickLogin}
          sx={{
            borderColor: 'orange',
            color: 'orange',
            height: 50,
            '&:hover': {
              borderColor: 'orange',
            },
          }}
        >
          회원가입
        </Button>
        <Spacer top={10} />
        <div>회원가입으로 ~~~</div>
      </Box>
    </Container>
  );
};

export default Login;
