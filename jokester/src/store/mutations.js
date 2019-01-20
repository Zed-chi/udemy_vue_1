import * as types from "./mutation-types.js";

export const mutations = {
    [types.INIT_JOKES] (state, payload){
        state.jokes.push(...payload);
    }
};