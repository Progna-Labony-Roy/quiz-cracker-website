import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './components/Root';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statictics/Statistics';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      loader: () => fetch('quizTopic.json'),
      children : [
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
