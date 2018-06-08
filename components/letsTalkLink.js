import Link from 'next/link'
import React from 'react'

export default class TalkLink extends React.Component{
    componentWillMount(){
        this.setState({
            hoveredOver: false
        });
    }
    state = {};
    changeOnMouseEnter = () =>{
        this.setState({
            hoveredOver:true
        });
    };
    changeOnMouseLeave = () =>{
        this.setState({
            hoveredOver:false
        });
    };
    renderPointer =() =>{
        if(this.state.hoveredOver){
            return(
                <p style={{fontSize: "25px"}}>Talk to me</p>
            );
        }else {
            return(
                <img style={{width: "50px"}}
                     src="../static/img/pointer.svg"/>
            );
        }

    };
    render(){
        return(
            <Link href="/letsTalk">
                <a onMouseOver={this.changeOnMouseEnter} onMouseOut={this.changeOnMouseLeave}>
                    {this.renderPointer()}
                </a>
            </Link>
        );
    }
}


