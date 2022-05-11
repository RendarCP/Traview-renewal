import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import Spacer from '../../components/common/Spacer';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;

const Box = styled.div`
  width: 100%;
  max-width: 700px;
`;

const EditPost = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    contents: '',
  });

  const onInputChange = (e: any) => {
    const { value, name, id } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <Container>
      <Typography>게시판 작성 뷰</Typography>
      <Box>
        <Spacer top={10} />
        <Typography>타이틀</Typography>
        <Spacer bottom={10} />
        <TextField
          fullWidth
          id="title"
          label="타이틀"
          variant="outlined"
          name="title"
          value={inputs.title}
          onChange={onInputChange}
        />
        <Spacer top={10} />
        <Typography>설명</Typography>
        <Spacer bottom={10} />
        <TextField
          fullWidth
          id="description"
          label="설명"
          variant="outlined"
          name="description"
          value={inputs.description}
          onChange={onInputChange}
        />
        <Spacer top={10} />
        <Typography>내용</Typography>
        <Spacer bottom={10} />
        <TextField
          fullWidth
          multiline
          maxRows={10}
          rows={10}
          id="contents"
          label="내용"
          variant="outlined"
          name="contents"
          value={inputs.contents}
          onChange={onInputChange}
        />
        <Spacer top={20} />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              console.log('작성중 ~');
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
            작성하기
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default EditPost;
