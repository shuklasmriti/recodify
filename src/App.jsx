import { Navbar } from "./Components/Navbar/Navbar"
import Main from "./Components/MainPage/Main"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import '../src/App.css'

{/* <link rel="stylesheet" href=".App.css" /> */}

function App() {
  return (
    <>
    <Navbar/>
<Main/>
<ToastContainer className="toast"/>

    </>
  )
}

export default App