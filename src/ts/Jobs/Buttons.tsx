import React, {PureComponent} from "react"
import {Button, ButtonGroup} from "react-bootstrap"

export interface Option {
  label: string,
  value: any
}

interface Props {
  options: Option[],
  value: any,
  onChange: (option: Option) => void
}

export default class Buttons extends PureComponent<Props> {
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
