import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

  const keyHandler = e => {
    
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div role="form" className="todoForm">
      <div className="row">
        <Grid cols={"8 12 9 10"}>
          <input type="text"
            id="description"
            className="form-control"
            placeholder="What you need todo?" 
            onChange={props.handleChange}
            value={props.description}
            onKeyUp={keyHandler}
            autocomplete="false"
        />
        </Grid>
        <Grid cols={"4 12 3 2"}>
          <IconButton style="primary mr-1" icon="plus" onClick={props.handleAdd}/>
          <IconButton style="info mr-1" icon="search" onClick={props.handleSearch} />
          <IconButton style="secondary" icon="close" onClick={props.handleClear}/>
        </Grid>
      </div>
    </div>
  )
}