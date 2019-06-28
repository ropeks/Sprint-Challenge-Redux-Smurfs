import React from 'react';
import Smurf from './Smurf';
import SmurfForm from './SmurfForm';

class Smurfs extends React.Component {

    render() {
        return (
            <div>
                <Smurf />
                <SmurfForm />
            </div>
        )
    }
}

export default Smurfs;