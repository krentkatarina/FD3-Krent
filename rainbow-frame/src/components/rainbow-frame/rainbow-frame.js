
import React from 'react';
class RainbowFrame extends React.Component {

    render() {
        let code = this.props.children;
        for(let i = 0; i < this.props.colors.length; i++) {
            const color = this.props.colors[i];
            code = <div style= {{border: `solid 3px ${color}`}}>{code}</div>;
        }
        return(
            <div>
                {code}
            </div>
        )
    }
}

export default RainbowFrame;