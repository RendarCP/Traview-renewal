import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/common/Header';

import Home from '../pages/Home';
import Guide from '../pages/Guide';
import Information from '../pages/Information';
import Mypage from '../pages/Mypage';
import MyPlan from '../pages/MyPlan';
import Questions from '../pages/Questions';
import Reviews from '../pages/Reviews';
import EditPlan from '../pages/EditPlan';
import SignUp from '../pages/Users/SignUp';
import Login from '../pages/Users/Login';
import Posts from '../pages/Posts/Posts';
import Post from '../pages/Posts/Post';
import EditPost from '../pages/Posts/EditPost';

const MainRoute = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/myplan" element={<MyPlan />} />
        <Route path="/editplan" element={<EditPlan />} />
        <Route path="/info" element={<Information />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/edit" element={<EditPost />} />
      </Routes>
    </>
  );
};

export default MainRoute;
