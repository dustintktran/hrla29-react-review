import React from 'react';
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            string: '',
            array: []
        }
        this.addString = this.addString.bind(this);
        this.pushToArray = this.pushToArray.bind(this);
        this.doTheThing = this.doTheThing.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    addString(){
        this.setState({string: document.getElementById('inputString').value});
        console.log('string added');
        document.getElementById('inputString').value = '';
    }

    pushToArray(){
        // this.state.array.push(this.state.string);
        console.log(this.state.string + ' has been pushed into the array')
        this.setState({
            string: '',
            array: this.state.array.concat(this.state.string)
        });
    }

    handleEdit(index){
        let todos = this.state.array.slice();
        let newTodo = prompt('Edit: ', todos[index]);
        console.log(newTodo);
        todos[index] = newTodo;
        this.setState({
            array:todos
        })
    }

    handleDelete(index){
        let todos = this.state.array.slice();
        todos.splice(index, 1);
        this.setState({array:todos});
    }

    doTheThing(item){
        console.log('you have clicked' + item);
    }

    render() {
        return (
            <div> What you should do:
                <input id='inputString'></input>
                <button id='addString' onClick={this.addString}>addString</button>
                <button id='stringToArray' onClick={this.pushToArray}>Push To Array</button>
                <div>
                    List:
                    <ul>
                        {this.state.array.map(
                            (item, i) => <ListEntry function={this.doTheThing} handleEdit={this.handleEdit} handleDelete={this.handleDelete} index={i} item={item}/>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default List;