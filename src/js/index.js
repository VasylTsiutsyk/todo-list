import "@babel/polyfill";
import Vue from "vue/dist/vue.esm.js";
import _ from "lodash";
import axios from "axios";
import Siema from "siema";


document.addEventListener("DOMContentLoaded", () => {
    let imgWrap = document.querySelector(".img-wrap");


    let watchExampleVM = new Vue({
        el: "#watch-example",
        data: {
            question: "",
            answer: "Пока вы не зададите вопрос, я не могу ответить!",
            srcImage: "",
        },
        watch: {
            question: function(newQuestion, oldQuestion) {
                this.answer = "Ожидаю, когда вы закончите печатать...";
                this.debouncedGetAnswer();
            }
        },
        created: function() {
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
        },
        methods: {
            getAnswer: function() {
                if (this.question.indexOf("?") === -1) {
                    this.answer = "Вопросы обычно заканчиваются вопросительным знаком. ;-)";
                    return;
                }
                this.answer = "Думаю...";
                var vm = this;
                axios.get("https://yesno.wtf/api")
                    .then(function(response) {
                        vm.answer = _.capitalize(response.data.answer);
                        vm.srcImage = _.capitalize(response.data.image);
                    })
                    .catch(function(error) {
                        vm.answer = "Ошибка! Не могу связаться с API. " + error;
                    });
            }
        }
    });




    let app = new Vue({
        el: ".siema",
        mounted() {
            this.mySiema = new Siema({
                duration: 300,
                easing: "ease-out",
                perPage: 3,
                loop: false,
            });
        }
    });

});