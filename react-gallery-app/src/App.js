import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NoPhoto from './Components/NoPhoto';
import PhotoContainer from "./Components/PhotoContainer";
import SearchBar from "./Components/SearchBar";
import NavBar from "./Components/NavBar";
import axios from 'axios'
import apiKey from './config';



class App extends Component  {

  state = {
    photos: {array:[], title: null},
    football: {array:[], title: null},
    computers: {array:[], title: null},
    javascript: {array:[], title: null},
    loading: true
  }


  componentDidMount(){
    this.preformSearch(`football`);
    this.preformSearch(`computers`);
    this.preformSearch(`javascript`);
  }

  preformSearch = (query) =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      if (query === `football`) {
        this.setState({
          football: {array:response.data.photos.photo, title: `Football`},
          loading: false,
          
        })
      }
      else if (query === `computers`) {
        this.setState({
          computers: {array:response.data.photos.photo, title: `Computers`},
          loading: false
          
        })
      }
      else if (query === `javascript`) {
        this.setState({
          javascript: {array:response.data.photos.photo, title: `Javascript`},
          loading: false
        })
      }
      else{
        this.setState({
        photos: {array:response.data.photos.photo, title: query},
        loading: false

      })}
      console.log(this.state.photos)
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
      });
    }



  render(){

  return(


  <BrowserRouter>
    <div className="container">
      
      <SearchBar onSearch = {this.preformSearch}/>
      
      <NavBar />
        
        {
            (this.state.loading)
            ?<p><strong>Loading...</strong></p>:
          
        <Switch>
          <Route exact path="/" render={ () => <Redirect to='/football'/>}/>
          <Route path="/football" render={ () => <PhotoContainer data = {this.state.football.array} title = {this.state.football.title}/>}/>
          <Route path="/computers" render={ () => <PhotoContainer data = {this.state.computers.array} title = {this.state.computers.title}/>}/>
          <Route path="/javascript" render={ () => <PhotoContainer data = {this.state.javascript.array} title = {this.state.javascript.title}/>}/>
          <Route path="/search" render={ () => <PhotoContainer data = {this.state.photos.array} title = {this.state.photos.title}/>}/>
          <Route component={NoPhoto}/> 
        </Switch>
        }
        </div>
    
  </BrowserRouter>

  )}}      

export default App;
