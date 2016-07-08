import BaseStore from "../base/BaseStore";

class TestStore extends BaseStore{
	constructor(){
		super()
		this.state = {
			count: 0
		}
	}

	get actionMap(){
		return {
			increment: "increment",
			decrement: "decrement"
		}
	}

	increment(data){
		this.state.count += data;
	}

	decrement(data){
		this.state.count -= data;
	}
}

export default new TestStore();