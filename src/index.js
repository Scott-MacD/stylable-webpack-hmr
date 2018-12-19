import Container from "./components/container";
import hyperHTML from "hyperhtml";

let update;

const state = {specialNumber: 7};
const dispatch = (action, payload) => {
    action(state, payload);
    update(state);
}

const bind = (rootComponent, renderTarget) => {
    const render = hyperHTML.bind(renderTarget);
    update = rootComponent(render, dispatch);
    update(state);
}

bind(Container, document.getElementById("app"));
