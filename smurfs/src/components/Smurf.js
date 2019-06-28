import React from 'react';

function Smurf(props) {
    return (
        <div>
            <strong>name: {props.smurf.name}</strong><br />
            age: {props.smurf.age} years <br />
            height: {props.smurf.height}
        </div>
    )
}

export default Smurf;