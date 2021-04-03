import api from '../core/api'

export const storeUsers = (users) => ({
    type: 'users/set',
    payload: users,
});

export const initUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUsers());
        setInterval(() => {
            dispatch(fetchUsers());
        }, 30 * 1000)
    };
};

export const fetchUsers = () => {
    return async (dispatch) => {
        console.log('Fetching users');
        const { data: result } = await api.getUsers();
        dispatch(storeUsers(result.data));
    };
};
