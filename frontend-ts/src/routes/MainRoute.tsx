import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home'
import Guide from '../pages/Guide'
import Information from '../pages/Information'
import Mypage from '../pages/Mypage'
import MyPlan from '../pages/MyPlan'
import Questions from '../pages/Questions'
import Reviews from '../pages/Reviews'
import EditPlan from '../pages/EditPlan'
import SignUp from '../pages/Users/SignUp';
import Login from '../pages/Users/Login'


const MainRoute = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/guide" element={<Guide />}/>
      <Route path="/mypage" element={<Mypage />}/>
      <Route path="/myplan" element={<MyPlan />}/>
      <Route path="/editplan" element={<EditPlan />}/>
      <Route path="/info" element={<Information />}/>
      <Route path="/question" element={<Questions />}/>
      <Route path="/review" element={<Reviews />}/>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default MainRoute