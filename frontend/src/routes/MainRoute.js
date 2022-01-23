import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

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
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/guide" component={Guide}/>
        <Route exact path="/mypage" component={Mypage}/>
        <Route exact path="/myplan" component={MyPlan}/>
        <Route exact path="/editplan" component={EditPlan}/>
        <Route exact path="/info" component={Information}/>
        <Route exact path="/question" component={Questions}/>
        <Route exact path="/review" component={Reviews}/>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  )
}

export default MainRoute