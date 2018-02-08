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

const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            return state.concat(action.item);
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

export default combineReducers({ displayName, nav });