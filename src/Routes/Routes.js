import React from "react";
import {Router} from "react-router-dom";
import {Route} from "react-router";
import {createBrowserHistory} from "history";
import LoginFormReactHook from "../Components/LoginReactHookForm";

const hist = createBrowserHistory();

class Routes extends React.Component{
    render() {
        return(
            <Provider>
                <Router history={hist}>
                    <Route exact path="/" component={LoginFormReactHook}/>
                </Router>
            </Provider>
        )
    }
}

export default Routes;

