import {wire} from "hyperhtml";

import style from "./container.st.css";
import CTRLS from "../actions/numberCtrls";
import button from "./button";

export default (render, dispatch) => {

    const renderIncrement = button(wire(), e => dispatch(CTRLS.INCREMENT));
    const renderDecrement = button(wire(), e => dispatch(CTRLS.DECREMENT));

    return ({specialNumber}) => render`

        <h1 class=${style.heading}>The number is: ${specialNumber}</h1>

        <nav class=${style.ctrls}>
            ${renderDecrement({title: "Decrease number", text: "--"})}
            ${renderIncrement({title: "Increase number", text: "++"})}
        </nav>
    `;

}