import * as ActionTypes from '../constants/ActionTypes';

export function checkOfflineRes(data) {
    return {
        type: ActionTypes.CHECK_OFFLINE,
        data
    }
};

export function catsData(data) {
    console.log("Action",data)
    return {
        type: "CATS_DATA",
        payLoad: data
    }
};