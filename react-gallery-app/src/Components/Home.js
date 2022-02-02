import PhotoContainer from "./PhotoContainer";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { Component } from "react";
import axios from 'axios'
import apiKey from '../config';

class Home extends Component {

  state = {
    photos: [],
    football: [],
    computers: [],
    javascript: [],
    title: null,
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
          football: response.data.photos.photo,
          loading: false,
          title: `Football`
        })
      }
      else if (query === `computers`) {
        this.setState({
          computers: response.data.photos.photo,
          loading: false,
          title: `Computers`
        })
      }
      else if (query === `javascript`) {
        this.setState({
          javascript: response.data.photos.photo,
          loading: false,
          title: `Javascript`
        })
      }
      else{
        this.setState({
        photos: response.data.photos.photo,
        loading: false,
        title: query

      })}
      console.log(this.state.photos)
    })
    .catch(error => {
    console.log('Error fetching and parsing data', error);
      });
    }

  render(){
    return (
      <div className="container">
        <SearchBar onSearch = {this.preformSearch}/>
      
        <NavBar />
        <h2>Photos of {this.state.title}</h2>
        <div className='photo-container'>
        {
          (this.state.loading)?<p><strong>Loading...</strong></p>:<PhotoContainer data = {this.state.photos}/>
        }
          
        </div>
        

      </div>
    );
  }
}

export default Home;