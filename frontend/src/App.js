import logo from './logo.svg';
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




function App() {
  return (
    <div>
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
