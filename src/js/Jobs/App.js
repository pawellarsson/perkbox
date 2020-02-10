import React, {PureComponent} from "react";
import Buttons from "./Buttons";

const OPTIONS = [
  {label: "0", value: 0},
  {label: "1", value: 1},
  {label: "2", value: 2},
  {label: "3", value: 3}
];

const STATUS = [
  'unemployed',
  'looking'
];

const OCCUPATION = [
  'dev',
  'dev2',
  'dev3'
];

export default class App extends PureComponent {
  state = {
    jobCount: 0,
    currStatus: null,
    currOccupation: null,
    compName: '',
    income: 0
  };

  handleJobCount = (option) => {
    this.setState({jobCount: option.value})
  };

  render() {
    const { jobCount, currentStatus, currOccupation, compName, income } = this.state;

    return (
      <div className="container">
        <div className="row">
          <Buttons options={OPTIONS} value={jobCount} onChange={this.handleJobCount} />
        </div>
        {
          jobCount === 0 && (
            <div className="row mt-2">
              <p>What is your current status?</p>
              <select onChange={this.handleChange} value={currentStatus}>
                {STATUS.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )
        }
        {
          jobCount !== 0 && OPTIONS.map(job => (
            job.value !== 0 && job.value <= jobCount && (
              <div className="row mt-2" key={job.value}>
                <h4>Job {job.value}</h4>
                <p>What is your occupation?</p>
                <select onChange={this.handleChange} value={currOccupation}>
                  {OCCUPATION.map(item => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <p>Company name</p>
                <input type="text" name="compName" value={compName} onChange={this.handleChange} />
                <p>Income</p>
                <input type="number" name="income" value={income} onChange={this.handleChange} />
              </div>
            )
          ))
        }
      </div>
    )
  }
}
