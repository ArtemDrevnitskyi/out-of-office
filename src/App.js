import { Routes, Route, Navigate } from 'react-router-dom';

import PageLayout from './layouts/PageLayout';
import * as Pages from './pages';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index path='/' element={<Pages.Welcome />} />
        <Route element={<PageLayout />}>
          <Route path='sales' element={<Pages.Sales />} />
          <Route path='operations' element={<Pages.Operations />} />
          <Route path='me' element={<Pages.Me />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
