import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statictics/Statistics';
import Blog from './components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root></Root>,
      children : [
        {path : '/',element : <Home></Home>},
        {path: '/home',element :<Home></Home>},
        {path: '/topics',element: <Topics></Topics>},
        {path: '/statistics',element: <Statistics></Statistics>},
        {path: '/blog',element: <Blog></Blog>},
        
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
