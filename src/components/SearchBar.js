import React from 'react';



class SearchBar extends React.Component {

    state = { term: ''};

    // It is important to use the Arrow Function here so that the 'this' keyword points to the SearchBar class - will get 'undefined otherwise'
    onFormSubmit = (event) => {
        event.preventDefault();             // prevents page from refreshing
        console.log(this.state.term);
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                            <input 
                                type="text" 
                                placeholder="Search for a term"
                                value={this.state.term} 
                                onChange={ e => this.setState({ term: e.target.value })} 
                            />
                    </div>
                </form>
            </div>
        );
    };
};


export default SearchBar;