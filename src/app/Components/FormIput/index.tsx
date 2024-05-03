import { Props } from "./interfaces"
import "./styles.css"

const FormInput = (props : Props) => {
    return (
        <div className="form-input-container">
            <label className="flex flex-col my-3">{props.label}</label>
            <input className="border py-2 bg-gray" type="text" value={props.value} onChange={props.onChange} />
        </div>
    );
};

export default FormInput;