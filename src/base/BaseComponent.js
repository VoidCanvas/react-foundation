import React from 'react';
import dispatcher from '../common/dispatcher';
import actions from "../common/Actions";

class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.getStore();
        this.dispatcher = dispatcher;
        this.actions = actions;
        this._listenerFunctionInstance = this._listenerFunc.bind(this);
    }
    getStore() {
        return null;
    }
    _listenerFunc(){
        let newState = this.store.getState();
        console.log(`HERE ${this.name}`)
        this.setState(newState);
    }
    componentDidMount(){
        //one day I will do something here
    }
    componentWillMount(){
        if(this.store){
            this.store.on("change", this._listenerFunctionInstance);
            let newState = this.store.getState();
            this.state = newState;
        }
    }
    componentWillUnmount(){
        if(this.store){
            this.store.removeListener("change", this._listenerFunctionInstance);
        }
    }

    render(){
        return (<div>This is BaseComponent</div>)
    }
}

module.exports = BaseComponent;