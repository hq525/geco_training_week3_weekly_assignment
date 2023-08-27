import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {
    render() {
        return (
            <form>
                <input value={this.props.name} onChange={this.props.nameChange} placeholder='Please enter name'/>
                <br />
                <input value={this.props.password} type='password' onChange={this.props.passwordChange} placeholder='Please enter password'/>
            </form>
        );
    }
}

Child.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string,
    nameChange: PropTypes.func,
    passwordChange: PropTypes.func
}

export default Child;