
import './App.css';
import { lazy, useState } from 'react';
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
import { redirect } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Email from "./components/Pages/Analytics";
//import Login from "./components/Pages/Login"
import { createContext } from 'react';
import useLocalStorage from 'use-local-storage'
import Admin from "./components/Layouts/Admin";
import Login from "./components/Pages/Login";
//import Register from "./components/Pages/Register";
import Top from "./components/Layouts/TopNavbar";
import Email1 from './components/Pages/Email';
import Call from './components/Pages/Call';
import Social from "./components/Pages/Social";
import Sms from './components/Pages/Sms Campaign';
import Marketing from './components/Pages/Email Marketing';
import Index from "./components/Headers/index";
import Mainpage from './MainPage';
import Forget from './components/Pages/Forget Password';
import Indexs from "./components/Main/Index";
import Reg from "./components/Pages/Register";
import Navbar from './components/Demo Nav/Navbars';


//const Reg = lazy(()=> import('./components/Pages/Register'))


export const UserContext = createContext();

function App() {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const [username, setUsername] = useState("");

  return (
    <div className="Main">
      <UserContext.Provider value={{ theme: theme, color: switchTheme, username, setUsername }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Reg />} />
            <Route path="/forget" element={<Forget/>} />
            <Route path="/nav" element={<Navbar/>} />
            <Route path="*" element={<Index />} />
            {/* <Route path="/" element={<Indexs/>}/> */}

            <Route path="/templates" element={<Sidebar><Email /></Sidebar>} />
            <Route path="/dash" element={<Sidebar><Dashboard /></Sidebar>} />
            <Route path="/marketing" element={<Sidebar><Marketing /></Sidebar>} />
            <Route path="/email" element={<Sidebar><Email1 /></Sidebar>} />
            <Route path="/call" element={<Sidebar><Call /></Sidebar>} />
            <Route path="/social" element={<Sidebar><Social /></Sidebar>} />
            <Route path="/sms" element={<Sidebar><Sms /></Sidebar>} />
            <Route path="/analytics" element={<Sidebar><Email /></Sidebar>} />

          </Routes>
        </BrowserRouter>



        {/* <MainPage/>  */}

      </UserContext.Provider>
    </div>
  );
}

export default App;
