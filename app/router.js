import React from "react";
import { syncHistoryWithStore } from "react-router-redux";
import { Router, Route, browserHistory } from "react-router";
import store from "./reducerStore";
import ChampionList from "./modules/world-champion/list/container";
import RaceListToppers from "./modules/season/race-list-toppers/container";

const history = syncHistoryWithStore(browserHistory, store);

//Router
const Routes = () => (
    <Router history = {history}>					
		<Route path="/" component={ChampionList}/>
		<Route path="/race-toppers/:season" component={RaceListToppers}/>						
	</Router>
);

export default Routes;