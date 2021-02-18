import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {
  state = {
    term: ''
  };

  onSearchUpdate = (currentText) => {
    this.setState(({term}) => {
      return {
        term: currentText
      }
    })
  }

  onChange = (e) => {
    this.onSearchUpdate(e.target.value);  
    this.props.onSearch(e.target.value);
  };
  
  render() {
      return (
        <div>
          <input type="text"
                  className="form-control search-input"
                  placeholder="type to search"
                  value={this.state.term} 
                  onChange={this.onChange}/>
        </div>

      )
  }
}



