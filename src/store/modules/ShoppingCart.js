const state = {
    ShoppingCart: false,
    Items: [],
};
const getters = {
    IsShoppingCart: (state) => {
        return !!state.ShoppingCart;
    },
    GetCartItems: (state) => {
        return state.Items;
    }
};
const actions = {
    ShowHideShoppingCart: ({commit}, state) => {
        commit('ShowHideShoppingCart');
    },
    AddItemsTocart: ({commit}, Payload) => {
        const cartitem = state.Items.find( item => item.id === Payload.id && item.color === Payload.color && item.size === Payload.size);
        // && item.color === Payload.color && item.size === payload.size
        if(!cartitem){
            commit('AddItemTocart', { 
                id: Payload.id,
                title: Payload.title,
                image: Payload.image,
                price: Payload.price,
                quantity: Payload.quantity,
                color: Payload.color,
                size: Payload.size
            })
        }else{
            commit('IncrementItemIncart', { 
                id: Payload.id, 
                title: Payload.title,
                image: Payload.image,
                price: Payload.price,
                quantity: Payload.quantity,
                color: Payload.color,
                size: Payload.size
            })
        }
    },
    DeleteItemfromcart: ({commit}, Payload) => {
        const cartitem = state.Items.find( item => item.id === Payload.id && item.color === Payload.color && item.size === Payload.size);
        commit('DeleteItemfromCart', {
            index: state.Items.indexOf(cartitem),
        })
    }
};
const mutations = {
    ShowHideShoppingCart: (state) => {
        state.ShoppingCart = !state.ShoppingCart;
    },
    AddItemTocart: (state, Payload) => {
        state.Items.push({
            id: Payload.id,
            title: Payload.title,
            image: Payload.image,
            price: Payload.price,
            quantity: Payload.quantity,
            color: Payload.color,
            size: Payload.size
        })
    },
    IncrementItemIncart: (state, Payload) => {
       const Item = state.Items.find( item => item.id === Payload.id && item.color === Payload.color && item.size === Payload.size);
        Item.quantity += Payload.quantity;
    },
    DeleteItemfromCart: (state, Payload) => {
        state.Items.splice(Payload.index, 1);
        console.log('Item removed from cart');
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};