import {Dispatcher} from 'flux';

class CustomDispatcher extends Dispatcher{
	publish(type, data){
		this.dispatch({type, data});
	}
}
const dispatcher = new CustomDispatcher();
window.dispatcher = dispatcher;
export default dispatcher;