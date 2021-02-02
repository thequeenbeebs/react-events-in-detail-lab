import React from 'react';

class DelayedButton extends React.Component {
    render() {
        let callback = (event) => {         
            this.props.onDelayedClick(event)
        }
        return(
            <button
                onClick={(event) => {
                    event.persist()
                    setTimeout(() => callback(event), this.props.delay)
                    }}>

            </button>
        )
    }
}

export default DelayedButton;
