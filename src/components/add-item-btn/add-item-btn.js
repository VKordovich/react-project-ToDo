import React from 'react';
import './add-item-btn.css'

export default class AddItemBtn extends React.Component {
    state = {
        label: ''
    };

    onChange = (e) => {
        this.setState({
            label: e.target.value.toUpperCase()
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.label);
        this.setState({
            label: ''
        })
    };

    render(){
        return(
            <form className='add-item-btn d-flex' onSubmit={this.onSubmit}>
                <input type='text' className='form-control' 
                                   placeholder='Type a new task...' 
                                   autoFocus 
                                   onChange={this.onChange} 
                                   value={this.state.label}>
                </input>
               <button type='button' className='btn btn-outline-secondary btn-add-item' onClick={this.onSubmit}>ADD ITEM</button>
            </form>
        )
    }
}