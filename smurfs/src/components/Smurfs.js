import React from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

function Smurfs(props) {
    return (
        <div>
            {
                props.smurfs.map(smurf => (
                    <Smurf key={smurf.id} smurf={smurf} />
                ))
            }
            <SmurfForm />
        </div>
    )
}

export default Smurfs;