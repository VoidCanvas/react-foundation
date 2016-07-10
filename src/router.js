import { Router, Route, Link, useRouterHistory, IndexRoute } from 'react-router';
import {createHashHistory} from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })


//Defining the components
//here is the base component
let components = {
	App: require("./App").default
};

//registering components
let componentNames = [
	"TestComponent",
	"DummyComponent"
].forEach(c=>{
	components[c] = require(`./components/${c}/${c}`).default;
});

class RouterConfig {
	getConfig(){
		return (
			<Router history={appHistory}>
			    <Router path='/' component={components.DummyComponent}>
			      <Route path='/counter' component={components.TestComponent} />
			    </Router>
			  </Router>
		);
	}

	//router also can handle actions
	//for an example anyone trigger the REDIRECT_TO action
	//with the second parameter as route name and it will listen and redirect to that
	_handleActions(action){
		switch(action.type){
			case this.actions.REDIRECT_TO:
				appHistory.push(action.data);
				break;
		}
	}
}
const routerConfig = new RouterConfig();
dispatcher.register(routerConfig._handleActions.bind(routerConfig));
export default routerConfig;