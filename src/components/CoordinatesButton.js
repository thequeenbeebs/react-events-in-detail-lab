import React from 'react';

class CoordinatesButton extends React.Component {
    
    
    render(props) {
        let callback = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])
        return(
            <button onClick={(event) => callback(event)}>

            </button>
        )
    }
}

export default CoordinatesButton;

