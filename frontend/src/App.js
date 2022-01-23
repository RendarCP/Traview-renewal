import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './App.css';

//- page
import Home from '../src/pages/Home'
import Guide from '../src/pages/Guide'
import Information from '../src/pages/Information'
import Mypage from '../src/pages/Mypage'
import MyPlan from '../src/pages/MyPlan'
import Questions from './pages/Questions'
import Reviews from './pages/Reviews'
import EditPlan from '../src/pages/EditPlan'
import SignUp from './pages/Users/SignUp';
import Login from './pages/Users/Login'

import MainRoute from './routes/MainRoute';




function App() {
  return (
    <div style={{ width: '100%'}}>
      <MainRoute />
      {/* <Router>
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
      </Router> */}
    </div>
  );
}

export default App;
