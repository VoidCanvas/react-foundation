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
	components[c] = require(`./components/${c}`).default;
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
}

export default new RouterConfig();