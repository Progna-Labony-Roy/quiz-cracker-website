import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Topics from "./components/Topics/Topics";
import TopicDetails from "./components/TopicDetails/TopicDetails";
import Root from "./components/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("quizTopic.json"),
        },
        {
          path: "/home",
          element: <Home></Home>,
          loader: () => fetch("quizTopic.json"),
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
          loader: () => fetch("quizTopic.json"),
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          loader: () => fetch("quizTopic.json"),
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
          loader: () => fetch("quizTopic.json"),
        },
        {
          path: "topic/:topicID",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.topicID}`
            );
          },
          element: <TopicDetails></TopicDetails>,
        },
      ],
    },
    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
