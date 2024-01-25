import "./style.css";
import { FaCheck as Check } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";
import { FaTrash as Trash} from "react-icons/fa";


function TodoItem(prop) {
    return (
        <li>
            {/* <span className="complete" onClick={prop.onComplete}>{prop.completed ? "✅" : "❌"}</span> */}
            <span onClick={prop.onComplete}>{prop.completed ? <Check className="complete" /> : <Cross className="incomplete"/>}</span>
            <span>{prop.text}</span>
            <span onClick={prop.onDelete} className="delete"><Trash /></span>
        </li>
    );
}


export { TodoItem }