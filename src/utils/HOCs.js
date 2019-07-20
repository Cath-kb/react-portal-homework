import ReactDOM from "react-dom"
import React from "react"

export const withPortal = domElem => Component => props => {
  return ReactDOM.createPortal(<Component {...props} />, domElem)
}
