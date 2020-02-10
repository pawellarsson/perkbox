import React, {PureComponent} from "react"
import {Tabs, Tab, Jumbotron, Grid} from "react-bootstrap"
import Todo from "../js/Todo/App"
import Jobs from "../js/Jobs/App"

import TodoTS from "../ts/Todo/App"
import JobsTS from "../ts/Jobs/App"

const USE_TYPESCRIPT = false

export default class App extends PureComponent {
  state = {}

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Test App in {USE_TYPESCRIPT ? "typescript" : "javascript"}</h1>
            <small>Change language in /src/Home/App.tsx</small>
          </Grid>
        </Jumbotron>

        <Grid>
          <Tabs defaultActiveKey={1} id="tabs">
            <Tab eventKey={1} title="Jobs" style={{padding: 10}}>
              {USE_TYPESCRIPT ? <JobsTS /> : <Jobs />}
            </Tab>
            <Tab eventKey={2} title="Todo" style={{padding: 10}}>
              {USE_TYPESCRIPT ? <TodoTS /> : <Todo />}
            </Tab>
          </Tabs>
        </Grid>
      </div>
    )
  }
}
