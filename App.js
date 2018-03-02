import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: [{id:0,text:"Home"},{id:1,text:"About"},{id:2,text:"Contact"}],
      isActive: 4,
      goods:[{id:0, name: "Milk",price: 300,added: false},{id:1, name: "Bread",price: 80,added: false},
      {id:2, name: "Egg",price: 350,added: false},{id:3, name: "Cola",price: 270,added: false}],
      total: 0
    };
    this.Clicked = this.Clicked.bind(this);
    this.goodClicked = this.goodClicked.bind(this);
  }

  Clicked(id){
    console.log(id);
    this.setState({isActive:id});
  }

  goodClicked(id){
    console.log(id);
    let pr = this.state.total;
    this.setState({isActive:id});
    let t = this.state.goods.slice();
    for(var i = 0;i < t.length;i++){
      if(t[i].id == id){
        if(t[i].added){
          t[i].added = false;
          pr -= t[i].price;
        }
        else{
          t[i].added = true;
          pr += t[i].price;
        }
      }
    }
    this.setState({
      goods: t,
      total: pr
    });

  }
  render() {
    return (
      <div className="App">
        <Router>
          <div className = "Routing">
          {
            this.state.arr.map((text) =>
               {if(this.state.isActive !== text.id){
                
                return ( <ul key = {text.id}>
                
                  <div className = "d" onClick={() => this.Clicked(text.id)}  style= {{backgroundColor: "white"}}>{text.text}</div>
                 </ul>
                 )
                }

                 else{
                  return (<ul key = {text.id}>
                  <div className = "d" onClick={() => this.Clicked(text.id)}  style= {{backgroundColor: "blue"}}>{text.text}</div>            
                </ul>)
              }}
              )
          }    
          {
            this.state.goods.map((good)=>
                
                <ul key = {good.id}>
                <div className = "d" onClick={() => this.goodClicked(good.id)}  style= {{backgroundColor: "white"}}>{good.name} {good.price}</div>
                </ul>
              )
          }     
           <div className = "d"   style= {{backgroundColor: "red"}}>{this.state.total}</div>
          </div>
        </Router>
        
      </div>
    );
  }
}

export default App;
