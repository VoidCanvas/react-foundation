import BaseStore from "../base/BaseStore";

class TestStore extends BaseStore{
	constructor(){
		super()
		this.state = {
			count: 0
		}
	}

	get actionMap(){
		let mapObject = {};
		mapObject[this.actions.COUNTER_INCREMENT] = "increment";
		mapObject[this.actions.COUNTER_DECREMENT] = "decrement";
		return mapObject;
	}

	increment(data){
		this.state.count += data;
	}

	decrement(data){
		this.state.count -= data;
	}
}

export default new TestStore();