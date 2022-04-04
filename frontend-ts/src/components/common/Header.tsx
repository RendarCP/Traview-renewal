import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Spacer from './Spacer';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  let location = useLocation();
  let navigate = useNavigate();
  console.log('history', navigate);
  return (
    <div
      style={{
        border: '1px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 80,
        alignItems: 'center',
      }}
    >
      <div
        style={{ padding: 20 }}
        onClick={() => {
          navigate('/');
        }}
      >
        TRAVIEW
      </div>
      <div>Menu</div>
      <div style={{ padding: 20 }}>
        <Button
          onClick={() => {
            navigate('/login');
          }}
          sx={{
            borderColor: '#32a852',
            color: '#32a852',
            marginRight: 2.5,
            height: 50,
            '&:hover': {
              borderColor: '#32a852',
            },
          }}
        >
          로그인
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            navigate('/signup');
          }}
          sx={{
            borderColor: '#32a852',
            padding: 3,
            height: 50,
            backgroundColor: '32a852',
            '&:hover': {
              borderColor: '#32a852',
            },
          }}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default Header;
