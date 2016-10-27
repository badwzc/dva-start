
export default {

    namespace: 'gragh',
    state: {
        loading: false,
        reports: {
            0: [],
            7: [],
            15: []
        }

            // {genre: 'Sports', sold: 275},
            // {genre: 'Strategy', sold: 115},
            // {genre: 'Action', sold: 120},
            // {genre: 'Shooter', sold: 350},
            // {genre: 'Other', sold: 150}

    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(location => {
                if (location.pathname === '/') {
                    dispatch({
                        type: 'query',
                        payload: location.query,
                    });
                }
            });
        },
    },

    effects: {
        *fetchRemote({ payload }, { call, put }) {
        },
    },

    reducers: {
        showLoading(state) {
            return { ...state, loading: true };
        },
        fetch(state, action) {
            return { ...state, ...action.payload };
        },
    },

}
