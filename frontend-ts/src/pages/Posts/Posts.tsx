import React from 'react';
import { Typography } from '@mui/material';
import PostCard from '../../components/common/PostCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
`;

const Posts = () => {
  const Posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Container>
      <Typography>posts</Typography>
      <Box>
        {Posts.map((post, index) => {
          return (
            <>
              <PostCard />
            </>
          );
        })}
      </Box>
    </Container>
  );
};

export default Posts;
