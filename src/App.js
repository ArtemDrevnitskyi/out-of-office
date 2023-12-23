import { Routes, Route, Navigate } from 'react-router-dom';

import * as Pages from './pages';
import PageLayout from './layouts/PageLayout';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index path='/' element={<Pages.Welcome />} />
        <Route element={<PageLayout />}>
          <Route path='sales' element={<h1>Sales</h1>} />
          <Route path='operations' element={<h1>Operations</h1>} />
          <Route path='me' element={<Pages.Me />} />
        </Route>
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
