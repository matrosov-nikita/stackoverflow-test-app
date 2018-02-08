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