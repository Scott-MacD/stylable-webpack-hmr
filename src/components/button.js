import {style, classes as st} from "./button.st.css";

export default (render, type, action) => {

    return ({title}) =>
        render`<button class=${st[type]} title=${title} onclick=${action}></button>`;

}