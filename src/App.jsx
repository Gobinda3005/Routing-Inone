import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Header from './Header';
// import Counter from './Allpages/countdown-Timer/src/App';
// import Accordin1 from './Allpages/Accordion1-Project/src/Acc';
import Effect from './Allpages/use-Effect/src/App';
import ChangingBgcolor from './Pages/Bgchange';
// import ContextApi from '../../Context_Api/src/App';
import Qupdate from './Pages/Qupdate';
// import Ddown from '../../L-Login/src/App';
// import Movieeffect from './Allpages/useEffect-Movie/src/App';
// import LoginForm from './Allpages/Login-Form/src/App';
import CountdownTimer from './Allpages/countdown-Timer/src/App';
import Movies from './Allpages/useEffect-Movie/src/App';
import Login from './Allpages/Login-Form/src/App';
import Todo from './Pages/Todo';
import Accordin from './Pages/Accordin';

const App = () => {
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <Routes>
        <Route
					path='/'
					element={<CountdownTimer />}>
        </Route>
				<Route
					path='/Counter'
					element={<CountdownTimer />}>
        </Route>
        <Route
					path='*'
					element={<Accordin />}>
        </Route>
        <Route
					path='/Effect'
					element={<Effect />}>
        </Route>
				<Route
					path='/Bgchange'
          element={<ChangingBgcolor />}>
        </Route>
        {/* <Route
          path='/Context'
          element={<ContextApi />}>
        </Route> */}
        <Route
					path='*'
					element={<Qupdate />}>
        </Route>
        <Route
					path='/Movieeffec'
					element={<Movies />}>
        </Route>
        
        <Route
					path='/Movieeffect'
					element={<Movies />}>
        </Route>
        <Route
					path='/Regform'
					element={<Login />}>
        </Route>
        <Route
					path='*'
					element={<Todo />}>
        </Route>
      </Routes>
		</div>
	)
}

export default App