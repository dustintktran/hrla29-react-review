import React from 'react';

class ListEntry extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <li onClick={() => this.props.function(this.props.item)}>
                {this.props.item}
                <input type='submit' value="Delete" onClick={() => this.props.handleDelete(this.props.index)}></input>
                <button onClick={() => this.props.handleEdit(this.props.index)}>Edit</button>
            </li>
        );
    }
}

export default ListEntry;