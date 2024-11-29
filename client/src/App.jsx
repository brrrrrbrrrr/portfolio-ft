import './App.css';
import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SwitchProvider from './contexts/SwitchContext';
import Avatar from './components/avatar/Avatar';
import PageNav from './components/page/pagenav/PageNav';

function App() {
  const [homeAnimation, setHomeAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHomeAnimation(true);
    }, 500);
  }, []);
  return (
    <div className='App'>
      <SwitchProvider>
        <PageNav homeAnimation={homeAnimation} />
        <Avatar homeAnimation={homeAnimation} />
        <Outlet />
      </SwitchProvider>
    </div>
  );
}

export default App;
