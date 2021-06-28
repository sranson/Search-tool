import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';


class App extends React.Component {

    state = { images: [] };
   
    onSearchSubmit = async (term) => {
       const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term }, 
            headers: {
                    Authorization: 'Client-ID Jka735JO2x_3jcuOjhmaUzQT9CKGuTgoe4_rXW59OwQ'
            } 
       });
        // console.log(response.data.results);
        this.setState({ images: response.data.results });
    }

    render() { 
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
                <SearchBar  onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}


export default App;