import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button, Typography, getInputUtilityClass } from '@mui/material';
// import { userSignUp } from '../../lib/api/api';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import backgroundImage from '../../static/images/back1.jpeg';
import { memberSignUp } from '../../modules/api/api';
import { isExternalModuleNameRelative } from 'typescript';

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
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
`;

const Spacer = styled.div`
  margin-top: 30px;
`;
const emailRegex =
  /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({ mode: 'all' });
  const [inputs, setInputs] = useState({
    userId: '',
    passwd: '',
    passwdCheck: '',
    name: '',
    nickName: '',
    birthDay: '',
    gender: '',
    email: '',
    phone: '',
  });
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);
  const [checkText, setCheckText] = useState('');
  const [isUserNameValid, SetIsUserNameValid] = useState(false);

  const onInputChange = (e: any) => {
    const { value, name, id } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClickSignUp = () => {
    memberSignUp({
      userId: inputs.userId,
      userPw: inputs.passwd,
      userNm: inputs.name,
      nickname: inputs.nickName,
      birthday: inputs.birthDay,
      gender: inputs.gender,
      email: inputs.email,
      phone: inputs.phone,
    })
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const onChagnePasswd = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      passwdCheck: value,
    });
    if (isCheckPassword) {
      setCheckText('비밀번호를 확인해 주세요!');
    }
  };

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const isValidUserId = inputs.userId.length < 1;
  const isValidPassword = inputs.passwd.length < 1;
  const isCheckPassword = inputs.passwd !== inputs.passwdCheck;
  const isNameCheck = inputs.name.length < 1;

  const onCheck = (e: any) => {
    const { id, value } = e.target;
    if (id === 'userId' && isValidUserId) {
      setIsIdValid(true);
    } else if (id === 'userId' && !isValidUserId) {
      setIsIdValid(false);
    }
    if (id === 'passwd' && isValidPassword) {
      setIsPasswordValid(true);
    } else if (id === 'passwd' && !isValidPassword) {
      setIsPasswordValid(false);
    }
    if (id === 'passwdCheck' && isCheckPassword) {
      setIsPasswordCheck(true);
    } else if (id === 'passwdCheck' && !isCheckPassword) {
      setIsPasswordCheck(false);
    }
    if (id === 'name' && isNameCheck) {
      SetIsUserNameValid(true);
    } else if (id === 'name' && !isNameCheck) {
      SetIsUserNameValid(false);
    }
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    console.log('teststests t======', isValidUserId, isValidPassword, isCheckPassword, isNameCheck),
    console.log('isValidUserId', isIdValid),
    console.log('isValidPassword', isPasswordValid),
    console.log('isCheckPassword', isPasswordCheck),
    console.log('isNameCheck', isUserNameValid),
    console.log(watch()),
    (
      <Container>
        <Box>
          <Typography variant="h3" sx={{ fontSize: 25, fontWeight: 'bold' }}>
            Traview
          </Typography>
          <Spacer />
          <form onSubmit={handleSubmit(onClickSignUp, onError)}>
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                console.log('error', error),
                (
                  <TextField
                    label="Last Name"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )
              )}
              rules={{ required: '이름음 필수 값입니다' }}
            />
            <TextField
              fullWidth
              {...register('firstName', {
                required: true,
                maxLength: 20,
                pattern: /^[A-Za-z]+$/i,
              })}
              error={isIdValid}
              helperText={isIdValid ? '아이디는 필수 값 입니다.' : ''}
              id="userId"
              label="아이디(필수)"
              variant="outlined"
              name="userId"
              value={inputs.userId}
              onBlur={(e) => onCheck(e)}
              onChange={onInputChange}
            />
            {errors?.firstName?.type === 'required' && <p>This field is required</p>}
            {errors?.firstName?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
            {errors?.firstName?.type === 'pattern' && <p>Alphabetical characters only</p>}
            <Spacer />
            <TextField
              fullWidth
              error={isPasswordValid}
              helperText={isPasswordValid ? '비밀번호는 필수 값 입니다.' : ''}
              id="passwd"
              label="비밀번호"
              variant="outlined"
              name="passwd"
              type="password"
              value={inputs.passwd}
              onChange={onInputChange}
              onBlur={(e) => onCheck(e)}
            />
            <Spacer />
            <TextField
              fullWidth
              error={isPasswordCheck}
              helperText={isPasswordCheck && isCheckPassword && checkText}
              id="passwdCheck"
              label="비밀번호 확인"
              variant="outlined"
              name="passwdCheck"
              type="password"
              value={inputs.passwdCheck}
              onChange={onChagnePasswd}
              onBlur={(e) => onCheck(e)}
            />
            <Spacer />
            <TextField
              fullWidth
              id="name"
              label="이름(필수)"
              variant="outlined"
              name="name"
              value={inputs.name}
              onChange={onInputChange}
              onBlur={(e) => onCheck(e)}
              error={isUserNameValid}
              helperText={isUserNameValid ? '비밀번호는 필수 값 입니다.' : ''}
            />
            <Spacer />
            <TextField
              fullWidth
              id="outlined-basic"
              label="닉네임"
              variant="outlined"
              name="nickName"
              value={inputs.nickName}
              onChange={onInputChange}
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
              onChange={onInputChange}
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
              onChange={onInputChange}
            />
            <Spacer />
            <TextField
              fullWidth
              id="outlined-basic"
              label="휴대폰"
              variant="outlined"
              name="email"
              value={inputs.phone}
              onChange={onInputChange}
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
                  borderColor: 'orange',
                },
              }}
            >
              회원가입
            </Button>
          </form>
        </Box>
      </Container>
    )
  );
};

export default SignUp;
