import React, {Component} from "react";
import "./App.css";

import {drizzleConnect} from "drizzle-react";
import {AppHeader} from "./scaffold/AppHeader";
import {ProviderJourneyStatus} from "./provider/ProviderJourneyStatus";
import {WalletRideOverview} from "./wallet/WalletRideOverview";
import {CreateRide} from "./CreateRide";
import {Route, Router, Switch} from "react-router";
import {StartPage} from "./StartPage";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

class App extends Component {
    render() {
        const {accounts} = this.props;
        console.log(accounts);

        return (
            <div className="App">
                <AppHeader/>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={StartPage}/>
                        <Route path="/create" component={CreateRide}/>
                        <Route path="/journey" component={ProviderJourneyStatus}/>
                        <Route path="/wallet" component={WalletRideOverview}/>
                    </Switch>
                </Router>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts,
        drizzleStatus: state.drizzleStatus,
        RideSharing: state.contracts.RideSharing
    };
};

const AppContainer = drizzleConnect(App, mapStateToProps);
export default AppContainer;
