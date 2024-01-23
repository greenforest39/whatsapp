import React, { lazy, useEffect } from 'react';
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { themeChange } from 'theme-change';
import Main from './page/Main';

const Login = lazy(() => import('./auth/Login'))
const Register = lazy(() => import('./auth/Register'))
const NewChat = lazy(() => import('./components/NewChat'))
const Profile = lazy(() => import('./components/Profile'))
const Broadcast = lazy(() => import('./components/Broadcast'))
const Recipients = lazy(() => import('./components/Recipients'))
const Information = lazy(() => import('./components/Information'))
const LoadingPage = lazy(() => import('./page/LoadingPage'))

const App: React.FC = () => {
  const renderPaths = (paths: string[], Element: JSX.Element) =>
    paths.map((path) => <Route key={path} path={path} element={Element} />);

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])

  return (
    <Router>
      <Routes>
        {/* <Route path="/app" element={<Navigate to="/main" />} /> */}
        {/* {renderPaths(
          ['/main/chat/:waId', '/main/chat/:waId/message/:msgId', '/main'],
          <Main />
        )}

        {/* {renderPaths(
          [
            '/main/login',
            'main/login/error',
            '/main/login/error/:errorCase',
            '/',
          ],
          <Login />
        )}

        {renderPaths(
          [
            '/main/register',
            'main/register/error',
            '/main/register/error/:errorCase',
            '/',
          ],
          <Register />
        )} */}
        {/* <Route path="/id_token_error" element={<IdTokenErrorPage />} /> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/recipients" element={<Recipients />} />
        <Route path="/information" element={<Information />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
