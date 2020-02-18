import "@babel/polyfill";
import Vue from "vue/dist/vue.esm.js";
import _ from "lodash";


document.addEventListener("DOMContentLoaded", () => {

    Vue.component('shopping-cart', {
        props: ['items'],
        computed: {
            totalSum() {
                let total = 0;
                this.items.forEach(item => {
                    if(item.checked === true) {
                        total += (item.price * +item.qty);
                    }
                });
                return total;
            }
        },
        methods: {
            removeItem(index) {
                this.items.splice(index, 1);
            }
        },
        template:
            `
            <div>
                <div v-for="(item, index) in items" class="df">
                    <span style="width:25%">{{item.title}}</span>
                    <input type="number" v-model="item.qty" style="width:15%">
                    <span>$ {{item.price}}</span>
                    <input type="checkbox" v-model="item.checked">
                    <button @click="removeItem(index)" class="">&#10005;</button>
                </div>
                    
                <div v-show="items.length === 0">
                    <p>Cart is empty</p>
                </div>
                    
                <div v-show="items.length > 0">
                    <hr>
                    <p>Total:  $ {{totalSum}}</p>
                </div>
            </div>
            `
    });


    const vm = new Vue({
        el: '#app',
        data: {
            cartItems: [],
            items: [
                { id: 1, title: 'Macbook Pro', price: 1500.00, qty: 1, checked: false },
                { id: 2, title: 'Iphone SE', price: 300.00, qty: 1, checked: false  },
                { id: 3, title: 'Air pods', price: 150.00, qty: 1 , checked: false },
                { id: 4, title: 'Apple Watch', price: 10, qty: 1 , checked: false },
            ],
        },

        methods: {
            addToCart(itemToAdd) {
                let itemInCart = this.cartItems.filter(item => item.id === itemToAdd.id);

                if (itemInCart.length > 0) {
                    this.cartItems.push(Object.assign({},this.cartItems, itemToAdd));
                } else {
                    itemInCart[0].qty += +itemToAdd.qty;
                }
                itemToAdd.qty = 1;
            }
        }
    });


});