Vue.component("blog-item", {
    template: "<li>some item </li>",
    data() {
        return {
            property: "Property"
        };
    },
    beforeCreate() {
        console.group("BeforeCreate:");
        console.log(`BeforeCreate this:  ${this}`);
        console.log("BeforeCreate: this.property: " + this.property); //for check!!!
        console.log("BeforeCreated: this.$el: " + this.$el); //for check!!!
        console.groupEnd();
    },
    created() {
        console.group("Created:");
        console.log(`Created this:  ${this}`);
        console.log("Created: this.property: " + this.property);
        console.log("Created: this.$el: " + this.$el); //for check!!!
        console.groupEnd();
    },
    beforeMount() {
        console.group("BeforeMount:");
        console.log(`BeforeMount this:  ${this}`);
        console.log(`BeforeMount this.property:  ${this.property}`);
        console.log(`BeforeMount this.$el:  ${this.$el}`);
        console.groupEnd();
    },
    mounted() {
        console.group("Mounted:");
        console.log(`Mounted this:  ${this}`);
        console.log(`Mounted this.property:  ${this.property}`);
        console.log(`Mounted this.$el:  ${this.$el}`);
        console.groupEnd();
    }
});


Vue.component("blog-list", {
    template: "<ul>List content <blog-item> </blog-item> </ul>",
    created() {
        console.log(`Blog-list counted this:${this}`);
    },
});



let vm4 = new Vue({
    el: "#app-4",
    created() {
        console.log(`Root counted this:${this}`);
    },
});





Vue.component("first-component", {
    template: "<div class=\"block first-component\" v-on:mouseover=\"counter\"></div>",
    methods: {
        counter() {
            return this.$parent.$children[1].count++;
        }
    }
});

Vue.component("second-component", {
    template: "<div class=\"block second-component\" >Count: {{count}}</div>",
    data() {
        return {
            count: 0
        };
    }
});

let vm5 = new Vue({
    el: "#app-5",
});


var watchExampleVM = new Vue({
    el: "#watch-example",
    data: {
        question: "",
        answer: "Пока вы не зададите вопрос, я не могу ответить!"
    },
    watch: {
        // эта функция запускается при любом изменении вопроса
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
                })
                .catch(function(error) {
                    vm.answer = "Ошибка! Не могу связаться с API. " + error;
                });
        }
    }
});