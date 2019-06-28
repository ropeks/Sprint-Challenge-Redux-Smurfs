import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

function SmurfForm(props) {
    const onAddSmurf = (e) => {
        e.preventDefault();

        const name = e.target['name'];
        const age = e.target['age'];
        const height = e.target['height'];

        const newSmurf = {
            name: name.value,
            age: age.value,
            height: height.value
        }

        name.value &&
        age.value &&
        height.value &&
        props.addSmurf(newSmurf);

        name.value = '';
        age.value = '';
        height.value = '';
    }

    return (
        <div>
            <form onSubmit={onAddSmurf}>
                <input name="name" placeholder="Name" autoComplete="off" />
                <input name="age" placeholder="Age" autoComplete="off" />
                <input name="height" placeholder="Height" autoComplete="off" />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default connect(
    null,
    { addSmurf }
)(SmurfForm);