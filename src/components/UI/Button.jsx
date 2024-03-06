import style from "./Button.module.css"

export default function Button({ children, color, onClick, disabled }) {
  return (
    <button
      className={`${style.btn} ${color === "green" ? style.green : ""} ${
        color === "red" ? style.red : ""
      } ${disabled ? style.gray : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
