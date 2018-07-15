import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Color extends React.Component {
    state = {
        color: "333333",
    };

    handleChange = (e) => {
        this.setState({
            color: e.target.value,
        });
    };

    hexToRgb = (hex) => {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [parseInt(result[1], 16), parseInt(result[1], 16), parseInt(result[1], 16)].join(', ') : null;
    };

    render(){
        return (
           <div>
               <div style={{
                   backgroundColor: ` ${this.state.color[0] === '#' ? this.state.color : this.state.color[0] === 'r' || this.state.color[0] === 'R' ? this.state.color : "#" + this.state.color } `,
                   color: this.state.color === 'ffffff' ? '000000' : 'ffffff',
                   paddingTop: '3rem',
                   height: '100vh',
                   textAlign: 'center',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   alignItems: 'center',
               }}>
                    <h1 style={{color: this.state.color === 'ffffff' ? '#000000' : '#ffffff'}}>Enter Color in Either RGB or Hex</h1>
                   <input
                       style={{height: '5%', margin: '1rem', width: '30%', textAlign: 'center', fontSize: '16px', borderRadius: '5px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}
                       placeholder="Hex Value"
                       type="text"
                       onChange={this.handleChange}
                       defaultValue={this.state.name}
                   />
                   <h3>RGB {this.hexToRgb(this.state.color) || this.state.color.replace(/rgb/gi, '')}</h3>
                   <input
                       style={{height: '5%', margin: '1rem', width: '30%', textAlign: 'center', fontSize: '16px', borderRadius: '5px', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}
                       placeholder="RGB Value"
                       type="text"
                       onChange={this.handleChange}
                       defaultValue={this.state.name}
                   />
               </div>
           </div>
        )
    }
}

ReactDOM.render(<Color/>, document.getElementById("app"));