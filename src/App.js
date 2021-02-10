import React from 'react';
import './App.css';                                          //импортируем css
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {

    return (                                                //возвращает JSX разметку
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/News' component={News}/>*/}
                    <Route path='/Profile' render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage} />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                    <Route path='/Settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
