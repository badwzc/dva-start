import { create, remove, update, query, queryAuto } from '../services/campaigns';

export default {
    namespace: 'campaigns',
    state: {
        loading: false,
        list: [],
        autoCampaigns: {},
        campaign_ids: [],
        auto_count: 0,
        hot_count: 0

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
                        type: 'queryCampaign',
                        payload: location.queryCampaign
                    });
                    // dispatch({
                    //     type: 'queryAuto',
                    //     payload: location.queryAuto,
                    // });
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
                        campaigns: data.data
                    }
                })
            }
        },
        *queryAuto({ payload }, {select, call, put }) {
            yield put({ type: 'showLoading'});
            const {data} = yield call(queryAuto);
            if(data) {
                yield put({
                    type: 'autoSuccess',
                    payload: {
                        autoCampaigns: data.data
                    }
                })
            }
        },*queryCampaign({ payload }, {select, call, put }) {
            yield put({ type: 'showLoading'});
            const {data} = yield call(queryCampaign);
            if(data) {
                yield put({
                    type: 'querySuccess',
                    payload: {
                        campaigns: data.data
                    }
                })
            }
        }
    },

    reducers: {
        showLoading(state) {
            return { ...state, loading: true };
        },
        querySuccess(state, action){
            console.log({...state, ...action.payload, loading: false})
            return {...state, ...action.payload, loading: false};
        },
        autoSuccess(state, action){
            return {...state, ...action.payload, loading: false};
        },
    }
}
