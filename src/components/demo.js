import React from 'react';

class Demo extends React.Component {
    constructor(props){
        super(props);
        console.log('demo this', this);
    }
    render(){
        return (
            <div>
                <p>demo.js</p>
                {this.props.allTodos.map((v, i) => (
                <div className={`single-item single-item-${(v.Priority=='High'?'high':(v.Priority=='Medium')?'medium':'low')}`}>
                    <span key={i}> {v.name} -> {v.createdAt}</span>
                    {/* <button onClick={()=>this.handleRemove(i)}>x</button> */}
                </div>
                ))}
            </div>
        )
    }
}

export default Demo;