import React from "react";

export class AddAlertForm extends React.Component {
  state = {
    value: ''
  }

  inputRef = React.createRef()

  focusInput = () => {
    this.inputRef.current.focus()
  }

  clearInput = () => {
    this.setState({
      value: ''
    })
  }

  onChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  onKeyDown = e => {
    const { value } = this.state

    if (e.keyCode === 13) {
      e.preventDefault()
    }

    if (e.keyCode === 13 && value.trim()) {
      this.addAlert()
    }
  }

  addAlert = () => {
    const { value } = this.state
    const { onSubmit } = this.props

    onSubmit(value)

    this.clearInput()
    this.focusInput()
  }

  componentDidMount() {
    this.focusInput()
  }

  render() {
    const { value } = this.state

    return (
      <form>
        <div className="field">
          <input
            value={ value }
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            type="text"
            placeholder="Alert text..."
            ref={this.inputRef}
          />
          <button
            onClick={this.addAlert}
            disabled={!value.trim()}
            type="button"
          >
            Add alert
          </button>
        </div>
      </form>
    )
  }
}
