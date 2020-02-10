import React, {PureComponent} from "react"
import {Button, ListGroupItem, ListGroup} from "react-bootstrap"

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }
  }

  handleClick = () => {
    const p = prompt();
    this.setState(({data}) => {
      if (p) {
        data.push(p)
      }
      return {data: [...data]}
    })
  }

  render() {
    const list = [...this.state.data]

    if (list.length === 0) {
      list.push(<i>Nothing added</i>)
    }

    return (
      <div>
        <ListGroup>
          {list.map((item, i) =>
            <ListGroupItem key={i}>{item}</ListGroupItem>)
          }
        </ListGroup>
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
}
