import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     done: false
  //   };
  //   this.clickFunc = this.clickFunc.bind(this);
  // };

  // clickFunc () {
  //   this.setState(state => ({
  //     done: !state.done
  //   }));
  // };
  // state = {
  //   done: false,
  //   important: false
  // };

  // clickFunc = () => {
  //   this.setState(({done}) => { // в setState передается функция с аргументом state в случаях зависимости текущего состояния от предыдущего. 
  //     return{                   // т.к. непонятно в каком состоянии сейчас state
  //       done: !done
  //     }
  //   })
  // };

  // clickImportant = () => {
  //   this.setState(({important}) => {
  //     return {
  //       important: !important
  //     }
  //   })
  // };

  render () {
        // const {done, important} = this.state;
    const {label, onDelete, onToggleDone, onToggleImportant, done, important, search} = this.props;
    let classNames = 'todo-list-item';

    if (done) {
      classNames += ' done';
    };

    if (important) {
      classNames += ' important';
    };

    if (search) {
      classNames += ' search';
    };

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );  
  };
};
