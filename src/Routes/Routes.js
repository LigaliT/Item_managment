import React from "react";
import {Router} from "react-router-dom";
import {Route} from "react-router";
import {createBrowserHistory} from "history";
import LogAndReg from "../Components/LogAndReg/LogAndReg";
import Main from "../Components/Main/Main";

const hist = createBrowserHistory();

class Routes extends React.Component{
    render() {
        return(
            <div>
                <Router history={hist}>
                    <Route exact path="/" >
                        <LogAndReg/>
                    </Route>
                    <Route exact path="/main" >
                        <Main/>
                    </Route>
                </Router>
            </div>
        )
    }
}

export default Routes;

