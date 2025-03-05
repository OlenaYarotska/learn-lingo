import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from '../Header/Header';
// import PrivateRoute from '../PrivateRoute/PrivateRoute';
import css from './App.module.css';
import ThemeProvider from '../../utils/ThemeProvider';

export default function App() {
  const Home = lazy(() => import('../../pages/Home/Home'));
  const Teachers = lazy(() => import('../../pages/Teachers/Teachers'));
  // const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));
  const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
 
  return (
    <div className={css.container}>
    <ThemeProvider>
      <Header/>
        <Suspense fallback="Loading..."> 
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/teachers' element={<Teachers />} />
          {/* <Route path='/favorites' element={<PrivateRoute component={<Favorites/>} redirectTo='/login'/>} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  )
};


