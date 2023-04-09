import { createStore } from 'vuex'
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

import axios from 'axios';

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
    products: [],
    copyOfProducts: [],
    categoryArray: [],
    cartItems: [],
    filter: {
      category: '',
      price: 0,
      name: '',
      rating: 0
    },
  },
  getters: {
    itemsCounter: state => state.cartItems.length,
    getCartItems: state => state.cartItems,
    getSubTotal: state => state.cartItems.reduce((sum, item) => {
      sum = sum + item.price * item.quantity;
      return sum;
    }, 0)

    // getProductsByCat: state => {
    //   return state.products.filter(product => {
    //     return product.category.id === state.filter.category;
    //   })
    // },
    // filterByName: (state, searchTerm) => {
    //     let filterdProducts = state.products.filter(product => {
    //       return product.startsWith(searchTerm);
    //     })
    //     return filterdProducts;
    //   }
  },
  mutations: {
    getQuantity: (state, id) => state.cartItems.length,
    setUser(state, payload) {
      state.user = payload;
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
    addItem(state, payload) {
      if (state.cartItems.findIndex(item => item.id === payload.id ) === -1) {
        payload.quantity = 1;
        state.cartItems.push(payload);
      }
    },
    removeItem(state, payload) {
      state.cartItems = state.cartItems.filter(item => payload.id !== item.id);
    },
    setQuantity(state, { id, quantity }) {
      state.products.map(product => {
          if (product.id === id) {
            product.quantity = quantity;
          }
      })
    },
    getProducts(state, { products }) {
      state.products = products.map(product => {
        product.rating = Math.floor(Math.random() * 5) + 1;
        return product;
      })
      state.copyOfProducts = products.map(product => {
        product.rating = Math.floor(Math.random() * 5) + 1;
        return product;
      })
    },
    getProductsByCat(state) {
      if (state.filter.category === '') {
        state.products = state.copyOfProducts.map(product => product);
      } else {
        state.products = state.copyOfProducts.filter(product => {
          return product.category === state.filter.category;
        })
      }
    },
    getProductsByRat(state) {
      if (state.filter.rating === 0) {
        state.products = state.copyOfProducts.map(product => product);
      } else {
        state.products = state.copyOfProducts.filter(product => {
            return product.rating === state.filter.rating;
          })
        }
    },
    getProductsByPrice(state) {
      if (state.filter.price === 0 || !state.filter.price) {
        state.products = state.copyOfProducts.map(product => product);
      } else {
        state.products = state.copyOfProducts.filter(product => {
            return product.price === parseInt(state.filter.price);
          })
        }
    },
    getProductsByName(state) {
      if (state.filter.name === '') {
        state.products = state.copyOfProducts.map(product => product);
      } else {
          // console.log(state.filter.name);
          state.products = state.copyOfProducts.filter(product => {
            if (product.title.toLowerCase().includes(state.filter.name))
              return product;
          })
        }
    },
    updateCat(state, payload) {
      state.filter.category = payload;
    },
    updateRat(state, payload) {
      state.filter.rating = payload;
    },
    updatePrice(state, payload) {
      state.filter.price = payload;
    },
    updateName(state, payload) {
      state.filter.name = payload;
    },

    updateProp(state, { prop, value }) {
      // console.log(payload.prop, payload.value);
      state.filter[prop] = value;
    },

    clearCartItems(state) {
      state.cartItems = [];
    }
  },
  actions: {
    fetchProducts: ({ commit }) => {
      // fetch('https://api.escuelajs.co/api/v1/products')
      fetch('https://dummyjson.com/products?limit=0')
      // fetch('http://localhost:3000/product')
      .then(res => res.json())
      .then(data => {
        commit('getProducts', data);
      });
    },
    signup: async ({ commit }, { email, password }) => {
      //console.log('action: ', email, password);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        commit('setUser', res.user);
      } else {
        throw new Error('error: could not complete signup');
      }
    },
    login: async ({ commit }, { email, password }) => {
      //console.log('action: ', email, password);
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        commit('setUser', res.user);
      } else {
        throw new Error('error: counld not complete login');
      }
    },
    logout: async ({ commit }) => {
      await signOut(auth);
      commit('setUser', null);
    },
    filterByCat: ({ commit }) => {
      commit('getProductsByCat');
    },
    filterByRat: ({ state, commit }) => {
      if (state.filter.category !== '')
        commit('getProductsByCat');
      commit('getProductsByRat');
    },
    filterByPrice: ({ state, commit }) => {
      if (state.filter.category !== '')
        commit('getProductsByCat');
      commit('getProductsByPrice');
    },
    updateProduct({ commit }, payload) {
      commit('updateProp', payload);
    },
    filter: ({ state, commit }, payload) => {
      if (payload.type === 'category') {
        commit('getProductsByCat');
      }
      if (payload.type === 'name') {
        commit('getProductsByName');
      }
      if (payload.type === 'price') {
        commit('getProductsByPrice');
      }
      if (payload.type === 'rating') {
        commit('getProductsByRat');
      }
    },
    commitUpdateCat: ({ commit }, payload) => {
      commit('updateCat', payload);
    },
    commitUpdateRat: ({ commit }, payload) => {
      commit('updateRat', payload);
    },
    commitUpdatePrice: ({ commit }, payload) => {
      commit('updatePrice', payload);
    },
    commitUpdateName: ({ commit }, payload) => {
      commit('updateName', payload);
    },
    addItemAction: ({ commit }, payload) => {
      commit('addItem', payload);
    },
    removeItemAction: ({ commit }, payload) => {
      commit('removeItem', payload);
    },

    setQuantityAct: ({ commit }, { id, quantity }) => {
      commit('setQuantity', { id, quantity })
    },

    clearAllItems: ({ commit }) => commit('clearCartItems'),
  },
  
  modules: {
  },
  
})

const unsub = onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady', true);
  store.commit('setUser', user);
  unsub();
})

export default store;
