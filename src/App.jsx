import React from 'react';
import { Routes,Route, Outlet } from 'react-router-dom';
import './App.css'
import Header from './Header';
// import Counter from '../../countdown-Timer/src/App';
import Accordin1 from './Pages/Accordin';
// import Effect from '../../use-Effect/src/App';
// import ChangingBgcolor from '../../Changing-Bgcolor/src/App';
// import ContextApi from '../../Context_Api/src/App';
// import Qupdate from '../../quote-Update/src/App';
// import Ddown from '../../L-Login/src/App';
// import Movieeffect from '../../useEffect-Movie/src/App';
import LoginForm from '../../Login-Form/src/App';
import Todo from './Pages/Todo';

const App = () => {
  return (
    <div>
      <Header/>
      <br/>
      <br/>
      <Routes>
        <Route
					path='/'
					element={<LoginForm />}>
        </Route>
				<Route
					path='/Counter'
					element={<LoginForm />}>
        </Route>
        <Route
					path='*'
					element={<Accordin1 />}>
        </Route>
        <Route
					path='*'
					element={<Accordin1 />}>
        </Route>
				<Route
					path='*'
					element={<Accordin1 />}>
        </Route>
        {/* <Route
          path='/Context'
          element={<ContextApi />}>
        </Route> */}
        <Route
					path='*'
					element={<Accordin1 />}>
        </Route>
        <Route
					path='*'
					element={<Accordin1 />}>
        </Route>
        
        <Route
					path='*'
					element={<Accordin1 />}>
        </Route>
        <Route
					path='*'
					element={<Accordin1 />}>
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