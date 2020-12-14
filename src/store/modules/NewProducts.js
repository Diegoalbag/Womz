/**************************************
              IMPORTS
**************************************/
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import db from '../../main'
/**************************************
              MODULE
**************************************/
const state = {
    BestSellers: [],
};
const getters = {
    GetBestSellers: state => {
        return state.BestSellers;
    }
};
const actions = {
    FetchBestSellers: async ({commit}) => {
        let response = [];
        await db.collection('products').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
               response.push({
                   id: doc.id,
                   title: doc.data().title,
                   src: doc.data().src,
                   price: doc.data().price
               });
            });
            commit('SaveBestSellers', response);
        })
        .catch((err) => {
            console.log(err);
        });
    },
};
const mutations = {
    SaveBestSellers: (state, response) => {
        state.BestSellers = response;
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};