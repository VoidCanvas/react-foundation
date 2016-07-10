import {EventEmitter} from "events";
import dispatcher from '../common/dispatcher';
import actions from "../common/Actions";

class BaseStore extends EventEmitter{
	constructor(){
		super();
		this.state = {
			name: "Base Store"
		}
		dispatcher.register(this._handleActions.bind(this));
		this.dispatcher = dispatcher;
        this.actions = actions;
	}
	_iAmChanged(){
		this.emit("change");
	}

	getState(){
		return Object.assign({}, this.state);
	}

	get actionMap(){
		return {};
	}

	_handleActions(action){
		let handlerFunctionName = this.actionMap[action.type];
		if(handlerFunctionName && typeof this[handlerFunctionName] === "function"){
			this[handlerFunctionName].apply(this, [action.data]);
		}
		this._iAmChanged();
	}
}

export default BaseStore;