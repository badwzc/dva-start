import { create, remove, update, query } from '../services/campaigns';

export default {

    namespace: 'campaigns',
    state: {
        loading: false,
        list: []

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
        *query({ payload }, {select, call, put }) {
            yield put({ type: 'showLoading'});
            const {data} = yield call(query);
            if(data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        list: data.data
                    }
                })
            }
        },
    },

    reducers: {
        showLoading(state) {
            return { ...state, loading: true };
        },
        fetch(state, action) {
            return { ...state, ...action.payload };
        },
        querySuccess(state, action){
            return {...state, ...action.payload, loading: false};
        },
    }
}
