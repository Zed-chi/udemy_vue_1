let one_url = "https://official-joke-api.appspot.com/jokes/random";
let ten_url = "https://official-joke-api.appspot.com/random_ten";

import * as types from "./mutation-types.js"
export const initJokes = ({commit}) => {
    fetch(ten_url, {method:"GET"})
    .then(res => res.json())
    .then(json => commit(types.INIT_JOKES, json))
};

export const addJoke = ({commit}) => {
    fetch(one_url, {method:"GET"})
    .then(res => res.json())
    .then(json => commit(types.ADD_JOKE, json))
};

export const removeJoke = ({commit}, index) => {
   commit(types.REMOVE_JOKE, index);
};