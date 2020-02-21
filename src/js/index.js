import "@babel/polyfill";
import Vue from "vue/dist/vue.esm.js";
import Datepicker from "vuejs-datepicker";
import FlashMessage from "@smartweb/vue-flash-message";
Vue.use(FlashMessage);


document.addEventListener("DOMContentLoaded", () => {
    Vue.component("flash-message", FlashMessage);

    Vue.component("date-picker", Datepicker);

    Vue.component("radio-component", {
        data() {
            return {
                picked: "",
                myStyle: {
                    backgroundColor: "blue"
                },
            };
        },
        template: `
            <label for="" class="radio-container" >
                <input type="radio" name="radios" value="this.$root.items.myStyle" v-model="picked">
                <span class="checkmark" :style="$root.myStyle"></span>  
            </label>
`
    });
    new Vue({
        el: "#app",
        data: {
            errors: [],
            cardNumber: "",
            cardName: "",
            correctCardName: "vasyl",
            cardCvv: "",
            correctCardCvv: "111",
            date: "",
            correctCardDate: "",
            items: [{
                myStyle: {
                    backgroundColor: "blue"
                },
            }, {
                myStyle: {
                    backgroundColor: "green"
                },
            }, {
                myStyle: {
                    backgroundColor: "yellow"
                },
            }, {
                myStyle: {
                    backgroundColor: "purple"
                },
            }]
        },
        computed: {
            getCardType() {
                let number = this.cardNumber;
                let re = new RegExp("^4");
                if (number.match(re) != null) return "visa";

                re = new RegExp("^(34|37)");
                if (number.match(re) != null) return "amex";

                re = new RegExp("^5[1-5]");
                if (number.match(re) != null) return "mastercard";

                re = new RegExp("^6011");
                if (number.match(re) != null) return "discover";

                re = new RegExp("^9792");
                if (number.match(re) != null) return "troy";

                return "visa";
            }
        },
        methods: {
            validCreditCard() {
                let number = this.cardNumber;
                if (/[^0-9-\s]+/.test(number)) return false;
                let nCheck = 0,
                    nDigit = 0,
                    bEven = false;
                number = number.replace(/\D/g, "");

                for (let n = number.length - 1; n >= 0; n--) {
                    let cDigit = number.charAt(n),
                        nDigit = parseInt(cDigit, 10);

                    if (bEven) {
                        if ((nDigit *= 2) > 9) nDigit -= 9;
                    }

                    nCheck += nDigit;
                    bEven = !bEven;
                }
                return (nCheck % 10) == 0;
            },
            checkForm(e) {
                this.errors = [];

                if (!this.cardName) {
                    this.errors.push("Write your card name.");
                    this.flashMessage.error({ title: "Error Message Title", message: 'Oh, you broke my heart! Shame on you!' });
                } else if (this.cardName !== this.correctCardName) {
                    this.errors.push("Write your correct card name.");
                }

                if (!this.cardCvv) {
                    this.errors.push("Write your card security code.");
                } else if (this.cardName !== this.correctCardCvv) {
                    this.errors.push("Write your correct card security code.");
                }

                if (!this.date) {
                    this.errors.push("Write your card entire date.");
                } else if (this.cardName !== this.correctCardDate) {
                    this.errors.push("Write your correct card entire date.");
                }

                if (!this.cardNumber) {
                    this.errors.push("Write your card number.");
                } else if (!this.validCreditCard()) {
                    this.errors.push("Write your correct card number.");
                }

                if (!this.errors.length) {
                    this.flashMessage.success({ title: "Success Message Title", message: "Hoorah, it is my fist npm package and it works!" });
                    return true;
                }
                e.preventDefault();
            },
        }
    });
});