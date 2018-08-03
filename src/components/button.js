import style from "./button.st.css";

export default (render, action) => {

    return ({title, text}) =>
        render`<button class=${style.root} title=${title} onclick=${action}>${text}</button>`;

}