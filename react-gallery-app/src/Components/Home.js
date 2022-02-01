import PhotoContainer from "./PhotoContainer";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { Component } from "react";
import axios from 'axios'
import apiKey from '../config';

class Home extends Component {

  state = {
    photos: [],
    loading: true
  }


  componentDidMount(){
    this.preformSearch();
  }

  preformSearch = (query = 'cats') =>{
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      })
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
        <h2>Results</h2>
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