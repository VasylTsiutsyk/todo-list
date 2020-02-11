import "@babel/polyfill";
import Vue from "vue/dist/vue.esm.js";


document.addEventListener("DOMContentLoaded", () => {

    // Vue.component("task", {
    //     props: ["data"],
    //     data() {
    //         return {};
    //     },
    //     methods: {
    //         task_done() {
    //             this.$emit("task_done");
    //         }
    //     },
    //     template: `
    // 	<ul class="task">
    // 		<li>
    //             <label>
    //                 <input type="checkbox" v-model="data.done">
    //                 <span>&nbsp</span>
    //             </label>
    //             <del class="task__title" v-if="data.done">{{ data.text }}</del>
    //             <span class="task__title" v-else>{{ data.text }}</span>
    // 		</li>
    // 		<button class="task__done" @click="task_done()">&#x274C</button>
    // 	</ul>`
    // });


    // new Vue({
    //     el: "#app",
    //     data: {
    //         tasks: [{ text: "Learn Vue.js", done: false, id: Date.now() }],
    //     },
    //     methods: {
    //         add_task({ target }) {
    //             if (target.value != "") {
    //                 this.tasks.push({ text: target.value, done: false, id: Date.now() }),
    //                     target.value = "";
    //             }
    //         },
    //         delete_task(id) {
    //             this.tasks = this.tasks.filter(task => task.id !== id);
    //         }
    //     }
    // });


    // new Vue({
    //     el: "#app-2",
    //     data: {
    //         todos: [{ text: "Learn Vue.js", done: false, id: Date.now() }],
    //     },
    //     methods: {
    //         addTask({ target }) {
    //             if (target.value != "") {
    //                 this.todos.push({ text: target.value, done: false, id: Date.now() }),
    //                     target.value = "";
    //             }
    //         },
    //         removeTask(id) {
    //             this.todos = this.todos.filter(todo => todo.id !== id);
    //         }
    //     }
    // });



    // new Vue({
    //     el: "#app-3",
    //     data: {
    //         todos: []
    //     },
    //     methods: {
    //         getRandom() {
    //             return Math.round(Math.random() * 100);
    //         },
    //         addTask() {
    //             this.todos.push({ text: this.getRandom() });
    //         },
    //     }
    // });



    Vue.component("blog-item", {
        template: `<li>some item </li>`,
        data() {
            return {
                property: 'Property'
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
        template: `<ul>List content <blog-item> </blog-item> </ul>`,
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
        template: `<div class="block first-component" v-on:mouseover="counter"></div>`,
        methods: {
            counter() {
                return this.$parent.$children[1].count++;
            }
        }
    });

    Vue.component("second-component", {
        template: `<div class="block second-component" >Count: {{count}}</div>`,
        data() {
            return {
                count: 0
            };
        }
    });

    let vm5 = new Vue({
        el: "#app-5",
    });
});