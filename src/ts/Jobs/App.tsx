import React, {PureComponent} from "react"
import Buttons, { Option } from "./Buttons"

const OPTIONS: Option[] = [
  {label: "0", value: 0},
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3}
]

interface Props {}

interface State {
  jobCount: number
}

export default class App extends PureComponent<Props, State> {
  state = {
    jobCount: 0
  }

  handleJobCount = (option: Option) => {
    this.setState({jobCount: option.value})
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <Buttons options={OPTIONS} value={jobCount} onChange={this.handleJobCount} />
        {/** @todo: add job displays */}
      </div>
    )
  }
}
