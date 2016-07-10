import BaseComponent from "../../base/BaseComponent";
import Store from '../../stores/TestStore';

class TestComponent extends BaseComponent{
	getStore(){
		return Store;
	}
	increment(){
		this.dispatcher.publish(this.actions.COUNTER_INCREMENT, 1);
	}
	decrement(){
		this.dispatcher.publish(this.actions.COUNTER_DECREMENT, 1);
	}
	render(){
		return (<div>
					<h1 className="test">Counter2</h1>
					<button onClick={this.decrement.bind(this)}>-</button>
					&nbsp;&nbsp; <span>{this.state.count}</span> &nbsp;&nbsp;
					<button onClick={this.increment.bind(this)}>+</button>
				</div>)
	}
}

export default TestComponent;