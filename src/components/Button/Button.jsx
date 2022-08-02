import './index.css';

const Button = ({onClick, textContent}) => {
    return (
        <button onClick={onClick}> {textContent} </button>
    )
}

export default Button;