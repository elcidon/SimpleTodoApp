import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from './todoActions'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  keyHandler(e) {

    const { add, search, description, clear } = this.props

    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if (e.key === 'Escape') {
      clear()
    }
  }

  componentWillMount() {
    this.props.search()
  }

  render() {

    const { add, search, description, clear } = this.props

    return (
      <div role="form" className="todoForm">
        <div className="row">
          <Grid cols={"8 12 9 10"}>
            <input type="text"
              id="description"
              className="form-control"
              placeholder="What you need todo?" 
              onChange={this.props.changeDescription}
              value={description}
              onKeyUp={this.keyHandler}
              autoComplete="false"
          />
          </Grid>
          <Grid cols={"4 12 3 2"}>
            <IconButton style="primary mr-1" icon="plus" onClick={() => add(description)}/>
            <IconButton style="info mr-1" icon="search" onClick={search} />
            <IconButton style="secondary" icon="close" onClick={clear}/>
          </Grid>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)