import React, {PureComponent, ReactNode} from "react"
import {Button, ListGroupItem, ListGroup} from "react-bootstrap"

interface Props {}

interface State {
  data: string[]
}

export default class App extends PureComponent<Props, State> {
  state = {
    data: []
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
    const list: ReactNode[] = [...this.state.data]

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
