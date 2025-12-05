import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./scenes/home";
import Watches from "./pages/Watches";
import ErrorPage from "./pages/ErrorPage";
import WatchDetailPage from "./pages/WatchDetailPage";
import DiscoveriesPage from "./pages/DiscoveriesPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'watches', element: <Watches/>},
      {path: 'watches/:watchId', element: <WatchDetailPage/>},
      {path: 'discoveries/', element: <DiscoveriesPage/>},
      {path: 'aboutus/', element: <AboutUsPage/>},
      {path: 'contact/', element: <ContactPage/>},
    ]
  }
]);


function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
