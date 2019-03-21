import {wire} from "hyperhtml";

import {style, classes as st} from "./container.st.css";
import CTRLS from "../actions/numberCtrls";
import button from "./button";

export default (render, dispatch) => {

    const renderIncrement = button(wire(), "increment", e => dispatch(CTRLS.INCREMENT));
    const renderDecrement = button(wire(), "decrement", e => dispatch(CTRLS.DECREMENT));

    return ({specialNumber}) => render`

        <h1 class=${style(st.heading, {negative: specialNumber < 0})}>
            The number is: ${specialNumber}
        </h1>

        <nav class=${st.ctrls}>
            ${renderDecrement({title: "Decrease number"})}
            ${renderIncrement({title: "Increase number"})}
        </nav>
    `;

}