import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from './todoActions'
import IconButton from '../template/iconButton';

const TodoList = props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style="success btn-sm mr-1" icon="check" onClick={() => props.markAsDone(todo)} hide={todo.done}/>
          <IconButton style="warning btn-sm mr-1" icon="undo" onClick={()=>props.markAsPending(todo)} hide={!todo.done}/>
          <IconButton style="danger btn-sm" icon="trash-o" onClick={()=>props.remove(todo)} hide={!todo.done}/>
        </td>
      </tr>
    ))
  }

  return (
    <table className="table my-5">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col" className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>
          {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)