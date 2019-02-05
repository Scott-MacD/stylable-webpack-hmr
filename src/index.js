import Container from "./components/container";
import hyperHTML from "hyperhtml";

let update;

const state = {specialNumber: 7};

function init() {
    const render = hyperHTML.bind(document.getElementById("app"));
    
    function dispatch(action, payload) {
        action(state, payload);
        update(state);
    }

    update = Container(render, dispatch);

    update(state);
}

init();

// Webpack HMR
if (module && module.hot) {
    module.hot.accept(init);
} 
