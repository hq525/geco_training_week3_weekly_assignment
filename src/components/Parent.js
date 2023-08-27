import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {

    state = {
        name: "",
        password: ""
    }

    nameChange = (e) => {
        this.setState(state => ({
            name: e.target.value,
            password: state.password
        }))
    }

    passwordChange = (e) => {
        this.setState(state => ({
            name: state.name,
            password: e.target.value
        }))
    }

    render() {
        return (
            <>
                <Child name={this.state.name} password={this.state.password} nameChange={this.nameChange.bind(this)} passwordChange={this.passwordChange.bind(this)} />
            </>
        );
    }
}

export default Parent;