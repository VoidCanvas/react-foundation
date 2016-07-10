let actionNameEntries = {
	COUNTER_INCREMENT: null,
	COUNTER_DECREMENT: null,
	REDIRECT_TO: null
}
class Actions {
	constructor(){
		for(let name in actionNameEntries){
			if(actionNameEntries.hasOwnProperty(name)){
				this[name] = name;
			}
		}
	}
}

export default new Actions();