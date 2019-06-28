import React from 'react';

function SmurfForm() {
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input name="name" placeholder="Name" autoComplete="off" />
                <input name="age" placeholder="Age" autoComplete="off" />
                <input name="height" placeholder="Height" autoComplete="off" />
                <button type="submit">Add Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;