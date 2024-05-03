import { Props } from "./interfaces"
import "./styles.css"

const Button = (props : Props) => {
    return (
        <div className="button-container">
            <button 
        onClick={props.onClick}
        >
        {props.text}
        </button>
        </div>
        
    );
};

export default Button;