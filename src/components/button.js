import style from "./button.st.css";

export default (render, type, action) => {

    return ({title}) =>
        render`<button class=${style[type]} title=${title} onclick=${action}></button>`;

}