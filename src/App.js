import React, {Component}  from 'react';
import './App.css';
import SearchBox from './SearchBox';
import Result from './Result'
import UserDetails from './UserDetails'


class App extends Component{
  constructor(){
                  super();
                  this.state={
                    language:'',
                    location:'',
                    result:[]
                              }
                }
  

  

  ChangeHandler = (event) => {
    let language = event.target.name;
    let location = event.target.name;
    this.setState({language,location});
  }

 componentDidMount=()=>{
            fetch('https://api.github.com/search/users?q=+language:${this.state.language}+location:${this.state.location}')
            
            .then(users=>{this.setState({result:users})}

                    );
            
            }         
  render(){
    
            
               return (
                        <div className="App">
                          <header className="App-header">
                            <h1>
                              Developer Hub
                            </h1>
                          </header>
                          <SearchBox ChangeHandler={this.ChangeHandler} />
                          <Result/>
                          <UserDetails result={this.result} />
                        </div>
  );

}
  }

export default App;
