import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


import ForumDetail from  './screens/ForumDetail.jsx';
import CreatePlan from  './screens/CreatePlan.jsx';
import TestForum from  './screens/TestForum.jsx';
import TestHome from  './screens/TestHome.jsx';
import TestAbout from  './screens/TestAbout.jsx';
import TestProfile from  './screens/TestProfile.jsx';
import TestPlanner from  './screens/TestPlanner.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route index={true} path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='' element={<PrivateRoute />}>
          <Route path='/profile' element={<ProfileScreen />} />
        </Route>


        {/* Test routes */}

        <Route path='/forum' element={<ForumDetail />} />
        <Route path='/c_plan' element={<CreatePlan />} />
        <Route path='/forum2' element={<TestForum />} />
        <Route path='/test' element={<TestHome />} />
        <Route path='/about' element={<TestAbout />} />
        <Route path='/seeprofile' element={<TestProfile />} />
        <Route path='/planner' element={<TestPlanner />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
