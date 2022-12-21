
import { useEffect } from 'react';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Spinner from './Pages/Sheard/Spinner/Spinner';
import router from './Router/Router/Router';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div>
      {
        loading ? <Spinner /> :
          <div className=" mx-auto   bg-gradient-to-r from-violet-100 to-violet-300">
            <RouterProvider router={router}></RouterProvider>
            <Toaster></Toaster>
          </div>
      }
    </div>
  );
}

export default App;
