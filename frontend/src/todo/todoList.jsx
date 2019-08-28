import React from 'react'
import IconButton from '../template/iconButton';

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style="success btn-sm mr-1" icon="check" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}/>
          <IconButton style="warning btn-sm mr-1" icon="undo" onClick={()=>props.handleMarkAsPending(todo)} hide={!todo.done}/>
          <IconButton style="danger btn-sm" icon="trash-o" onClick={()=>props.handleRemove(todo)} hide={!todo.done}/>
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