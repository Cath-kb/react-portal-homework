import React from "react"
import ReactDOM from "react-dom"

export const withPortal = domElem => Component => props => {
  return ReactDOM.createPortal(<Component {...props} />, domElem)
}

export const withAutoRemove = duration => (Component, entityPropName = 'alert') => {
  return class ComponentWithTimeout extends React.Component {
    timeoutId = null

    componentDidMount() {
      const { [entityPropName]: {id}, onRemove } = this.props

      this.timeoutId = setTimeout(() => {
        onRemove(id)
      }, duration)
    }

    componentWillUnmount() {
      clearInterval(this.timeoutId)
    }

    render() {
      return <Component {...this.props} />
    }
  }
}
