import {Dispatcher} from 'flux';

class CustomDispatcher extends Dispatcher{
	publish(type, data){
		this.dispatch({type, data});
	}
}
export default new CustomDispatcher();