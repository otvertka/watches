import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./scenes/home";
import Watches from "./pages/Watches";
import ErrorPage from "./pages/ErrorPage";
import WatchDetailPage from "./pages/WatchDetailPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'watches', element: <Watches/>},
      {path: 'watches/:watchId', element: <WatchDetailPage/>},
    ]
  }
]);


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
