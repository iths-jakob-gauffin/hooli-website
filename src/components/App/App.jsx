import React from 'react'

import "./App.scss";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// BEM = Block__Element--Modifier
import { textData } from "../../data/data";

import Header from "../Header/Header";
import Content from "../Content/Content";
import Aside from "../Aside/Aside";

const App = () => {
    return (
        <div className="App">
            <Router>
                <div className="App__Grid">  
                    <Header />
                    <div className="App__Row">
                        <Switch>
                            <Route path="/hooli-website/strengths">
                                    <Content title={textData.strengths.title}  text={textData.strengths.text}/>
                            </Route>
                            <Route path="/hooli-website/wishes"> 
                                    <Content title={textData.wishes.title}  text={textData.wishes.text}/>
                            </Route>
                            <Route path="/hooli-website/flaws"> 
                                    <Content title={textData.flaws.title}  text={textData.flaws.text}/>
                                </Route>
                            <Route path="/hooli-website/works"> 
                                    <Content title={textData.works.title}  text={textData.works.text}/>
                                </Route>
                            <Route path="/hooli-website">
                                    <Content title={textData.strengths.title}  text={textData.strengths.text}/>
                            </Route>
                        </Switch>
                        <Aside />
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App
