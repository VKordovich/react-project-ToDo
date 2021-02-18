import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

  buttons = [
    {label: 'all', name: 'All'},
    {label: 'active', name: 'Active'},
    {label: 'done', name: 'Done'}
  ]

  onPush = (e) => {
    this.props.onFilterUpdate(e.currentTarget.name);
  };

  render (){
    const buttons = this.buttons.map(({label, name}) => {
      const clazz = this.props.filter === label ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button type="button"
        className={`btn ${clazz}`} key={label} name={label} onClick={this.onPush}>{name}</button>
      )
    });
    
    return(
      <div className="btn-group">
        {buttons}
    </div>
    );
  };
};

