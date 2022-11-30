
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Router/Router';


function App() {
  return (
    <div className=" mx-auto   bg-gradient-to-r from-violet-100 to-violet-300">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
