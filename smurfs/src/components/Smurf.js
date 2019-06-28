import React from 'react';
import { connect } from 'react-redux';
import { killSmurf } from '../actions';

function Smurf(props) {
    const onSmurfClick = (e) => {
        const id = e.target.id;
        props.killSmurf(id);
    }

    return (
        <div id={props.smurf.id} onClick={onSmurfClick}>
            <strong id={props.smurf.id}>name: {props.smurf.name}</strong><br />
            age: {props.smurf.age} years <br />
            height: {props.smurf.height}
        </div>
    )
}

export default connect(
    null,
    { killSmurf }
)(Smurf);