import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Dashboard } from './component/dashBoard/Dashboard'
import LoguinPage from './page/loguinPage/LoguinPage'
import { MenuSideBar } from './component/layout/MenuSideBar'
import { Routers } from './Router/Routers'

function App() {
 

  return (
    <>
    {/* <LoguinPage/>
    <Dashboard/> */}
    <Routers/>
    
    </>
  )
}

export default App
