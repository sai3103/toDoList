import $ from 'jquery';
import Popper from 'popper.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {



  constructor(props){
    super(props);
    this.state={
      userInput: "",
      doList: [],
      datenow: []
    }
    this.updateList=this.updateList.bind(this);
  }

  componentWillMount(){
    $(function(){
      $('#s').focus();
    });
  }

  changeInput(e){
    this.setState({
      userInput: e
    });
  }

  updateList(){

    if(this.state.userInput!=""){
    
    let a=this.state.doList;
    let b=this.state.userInput;
    let c=this.state.datenow;
    let d=new Date();
    let month=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    let e=d.getDate()+" "+month[d.getMonth()]+" "+d.getFullYear()+" , "+d.toLocaleTimeString();
    c.push(e);
    a.push(b);
    this.setState({
      doList: a,
      datenow: c,
      userInput: ""
    })

    }

    $(function(){
      $('#s').focus();
    });
    
  }

  delItem(e){
    let a=this.state.doList;
    /*let b=a.filter(
      (c)=>c!=e
    );*/
    a.splice(e,1);
    this.setState({
      doList: a
    });
    
    }


  render() {
    return (
      <div className="container">
        <h1 className="text-center display-4">--Save The To Do List--</h1><br/><br/>
        
        <input id="s" type="text" value={this.state.userInput} onChange={(e)=>this.changeInput(e.target.value)} className="form-control" /><br/>
        <div className="col-12 text-center">
        <input type="submit" onClick={this.updateList} value="Add" className="btn btn-primary text-center" /><br/>
        </div>
        
        <h1 className="text-center mt-4">LIST</h1>
        <hr/>
        <ul>

        {
          this.state.doList.map(
            (val,i)=> {

              return (

                <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                <h2>{val}</h2>
                <h6>{this.state.datenow[i]}</h6>
                <button type="button" class="close p" onClick={()=>this.delItem(i)} >
                <span>&times;</span>
                </button>
                </div>
              )
            }

          )
        }


        
        </ul>
      </div>
    );
  }
}

export default App;
