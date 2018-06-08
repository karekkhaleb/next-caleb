import React from 'react'
import axios from 'axios'

export default class TalkForm extends React.Component{
    state = {};
    submitAdvice= (e) =>{
        e.preventDefault();
        if(!this.refs.email.value || !this.refs.advice.value){
            alert('Please fill all the fields!!!');
        }else{
            if(confirm('Are you sure?')){
                let newAdvice = {
                    email:this.refs.email.value,
                    content: this.refs.advice.value
                };
                axios.post('/api/advice',newAdvice)
                    .then(()=>alert('you advice is received!!'))
                    .catch(err=>console.log(err));
            }
        }
    };
    render(){
        return (
            <form onSubmit={this.submitAdvice}>
                <h3 className="flow-text">All fields are to me filled</h3>
                <div className="input-field">
                    <input id="email" type="email" ref="email"/>
                    <label htmlFor="email">Enter your email please</label>
                </div>
                <div className="input-field">
                    <textarea ref="advice" className="materialize-textarea" name="message" id="message" ></textarea>
                    <label htmlFor="message">Enter your Message</label>
                </div>
                <div className="input-field">
                    <input style={{
                        width:"100%"
                    }} type="submit" value="submit" className="btn orange darken-3 waves-effect"/>
                </div>
            </form>
        );
    }
}