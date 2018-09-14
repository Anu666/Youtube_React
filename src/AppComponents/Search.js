import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
    }

    render(){
        return (
            <input />
        );
    }
}

export default Search;