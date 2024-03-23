import React from 'react';

function TextField(props) {
    return (
        <div>
            <input type="text" name={props.name}/>
        </div>
    );
}

export default TextField;