export const LogIn = (name) => {
    return {
        type: 'LOG_IN',
        name
    }
}

export const LogOut = () => {
    return {
        type: 'LOG_OUT',
    }
}

export const StartLoad = () => {
    return {
        type: 'LOADING',
    }
}

export const Loaded = () => {
    return {
        type: 'LOADED',
    }
}

export const FailedLoad = (error) => {
    return {
        type: 'FAILED_LOAD',
        error
    }
}

export const AddItems = (items) => {
    return {
        type: 'ADD_ITEMS',
        items
    }
}

const FETCH_URL = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=react-native&site=stackoverflow';

export const FetchResources = (dispatch) => {
    dispatch(StartLoad());
    return fetch(FETCH_URL)
        .then((response) => response.json())
        .then((responseJson) => {
            dispatch(Loaded());
            if (!responseJson.items) {
                return responseJson;
            }

            const titleCollection = responseJson.items.map((item, index) => {
                return { 
                    title: item.title,
                    key: index 
                }
            });

            dispatch(AddItems(titleCollection));
        })
        .catch((error) => {
            console.error(error);
            dispatch(FailedLoad(error))
        });
}