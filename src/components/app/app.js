import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItemBtn from '../add-item-btn';

import './app.css';

export default class App extends React.Component{
state = {
  todoData: [
    { label: 'Drink Coffee', done: false, important: false, id: 1},
    { label: 'Make Awesome App', done: false, important: false, id: 2},
    { label: 'Have a lunch', done: false, important: false, id: 3}
  ],
  term: '',
  filter: ''
};

createItem = (label, done, important, arrLength, search) => {
  const newText = {
    label: label,
    done: done,
    important: important,
    id: arrLength + 1,
    search: search
  };
  return newText
  
};

deleteFunc = (id) => { // удаление элемента из списка
  this.setState(({todoData}) => {
    const indexElement = todoData.findIndex((currEl) => currEl.id === id); 
    let newArrData = [...todoData];
    newArrData = [...newArrData.slice(0, indexElement), 
      ...newArrData.slice(indexElement + 1, newArrData.length)];
    return {
      todoData: newArrData
    }
  })
};

onAdd = (text) => { // добавление элемента в список
  this.setState(({todoData}) => {
    let newArrData = [...todoData];
    newArrData.push(this.createItem(text, false, false, newArrData.length, false));
    return {
      todoData: newArrData
    }
  })
};

mainToggle = (arr, id, property) => {
  const indexElement = arr.findIndex((currEl) => currEl.id === id); 
  const oldEl = arr[indexElement];
  let newEl = {...oldEl, [property]: !oldEl[property]};
  return [...arr.slice(0, indexElement),
    newEl,
    ...arr.slice(indexElement + 1, arr.length)];
};

onToggleDone = (id) => {
  this.setState(({todoData}) => {
    return {
      todoData: this.mainToggle(todoData, id, 'done')
    }
  })
};

onToggleImportant = (id) => {
  this.setState(({todoData}) => {
    return {
      todoData: this.mainToggle(todoData, id, 'important')
    }
  })
};

onSearchItemUpdate = (items, text) => {
  if (text.length == 0) {
    return items;
  };
  return items.filter((item) => { return item.label.toLowerCase().indexOf(text.toLowerCase()) > -1});
};

onSearch = (currentText) => {
  this.setState(({term}) => {
    return {
      term: currentText
    }
  })
}

onFilter = (items, filter) => {
  switch(filter) {
    case 'all': return items;
    case 'active': return items.filter((item) => !item.done);
    case 'done': return items.filter((item) => item.done);
    default: return items;
  }
}

onFilterUpdate = (currentValue) => {
  this.setState(({filter}) => {
    return {
      filter: currentValue
    }
  })
}

render() {
  const {todoData, term, filter} = this.state; 
  const visibleItem = this.onFilter(this.onSearchItemUpdate(todoData, term), filter);
  const toDone = todoData.filter((el) => el.done).length;
  const needToDone = todoData.length - toDone;
  return (
    <div className="todo-app">
      <AppHeader toDo={needToDone} done={toDone} />

      <div className="top-panel d-flex">
        <SearchPanel onSearch={this.onSearch}/>
        <ItemStatusFilter onFilterUpdate={this.onFilterUpdate} filter={filter}/>
      </div>

      <TodoList todos={visibleItem} 
                onDelete={this.deleteFunc}
                onToggleDone={this.onToggleDone}
                onToggleImportant={this.onToggleImportant}/>
      <AddItemBtn onAdd={this.onAdd}/>
    </div>
  );
}
};
