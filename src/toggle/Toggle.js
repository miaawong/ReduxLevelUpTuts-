import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, toggleMessage }) => (
    <div>
        {messageVisibility &&
            <p>you will be seeing this if redux action is toggled </p>
        }
        <button onClick={toggleMessage}>Toggle Me</button>
    </div>
);


const mapStateToProps = (state) => ({
    // taking our state and mapping it to a prop, which gets passed into our component 
    messageVisibility: state.toggle.messageVisibility,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    // toggleMessage is set to props and binding u with dispatch 
    toggleMessage,
}, dispatch);

// connecting Toggle to our redux store and exporting that as Toggle 
export default connect(mapStateToProps, mapDispatchToProps)(Toggle); 