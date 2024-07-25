import logo from './logo.svg';
import './App.css';
import { Create } from './component/create';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Read from './component/Read';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Create />
  },
  {
    path: "/read",
    element:<Read />
  }
])


function App() {
  return (
     <>
     {/* <Create /> */}
     <RouterProvider router={router} />
     </>



    //   <BrowserRouter>
    // <div className="App">
    
    // <Routes>
     
    //   <Route path="/" element={<Create />} />
    //   <Route path="/read" element={<Read />} />
     
      
     
    // </Routes>
    // </div>
    // </BrowserRouter>
  );
}

export default App;
