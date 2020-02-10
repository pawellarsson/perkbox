import React, {PureComponent} from "react"
import {Button, ButtonGroup} from "react-bootstrap"

export default class Buttons extends PureComponent {
  render() {
    const {options, value, onChange} = this.props
    return (
      <ButtonGroup>
        {options.map((option) =>
          <Button key={option.value} onClick={() => onChange(option)} className={value === option.value ? "selected" : ""}>{option.label}</Button>
        )}
      </ButtonGroup>
    )
  }
}
