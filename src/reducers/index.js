import { combineReducers } from 'redux';
import AppNavigation from '../containers/AppNavigation';

const displayName = (state = '', action) => {
    switch (action.type) {
        case 'LOG_IN': {
            return action.name;
        }

        case 'LOG_OUT': {
            return '';
        }

        default: {
            return state;
        }
    }
}

const isLoading = (state = true, action) => {
    switch (action.type) {
        case 'LOADING': {
            return true;
        }

        case 'LOADED': {
            return false;
        }

        case 'FAILED_LOAD': {
            return false;
        }

        default: {
            return state;
        }
    }
}

const dataSource = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEMS': {
            return state.concat(action.items);
        }

        default:  {
            return state;
        }
    }
}

const nav = (state, action) => {
    const newState = AppNavigation.router.getStateForAction(action, state)
    return newState || state
}

export default combineReducers({ displayName, nav, isLoading, dataSource });