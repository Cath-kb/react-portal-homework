import React from "react"

export const Alert = ({ alert: {id, message}, onRemove }) => {
  const removeAlert = () => onRemove(id)

  return (
    <div className="alert">
      <button className="close-alert" onClick={removeAlert} type="button" title="remove alert">+</button>
      <span>{message}</span>
    </div>
  )
}
