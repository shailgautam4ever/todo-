import React from 'react';

class Increment extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            count : 0
        };
    }

     handleClick = ()=> {
         let {count} = this.state;
         if(count<10)
         count = count + 1;
         this.setState({count});
     }


    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Increment</button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Increment;