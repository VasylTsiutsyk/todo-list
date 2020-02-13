	Vue.component("task", {
	    props: ["data"],
	    data() {
	        return {};
	    },
	    methods: {
	        task_done() {
	            this.$emit("task_done");
	        }
	    },
	    template: `
		<ul class="task">
			<li>
				<label>
					<input type="checkbox" v-model="data.done">
					<span>&nbsp</span>
				</label>
				<del class="task__title" v-if="data.done">{{ data.text }}</del>
				<span class="task__title" v-else>{{ data.text }}</span>
			</li>
			<button class="task__done" @click="task_done()">&#x274C</button>
		</ul>`
	});


	new Vue({
	    el: "#app",
	    data: {
	        tasks: [{ text: "Learn Vue.js", done: false, id: Date.now() }],
	    },
	    methods: {
	        add_task({ target }) {
	            if (target.value != "") {
	                this.tasks.push({ text: target.value, done: false, id: Date.now() }),
	                    target.value = "";
	            }
	        },
	        delete_task(id) {
	            this.tasks = this.tasks.filter(task => task.id !== id);
	        }
	    }
	});


	new Vue({
	    el: "#app-2",
	    data: {
	        todos: [{ text: "Learn Vue.js", done: false, id: Date.now() }],
	    },
	    methods: {
	        addTask({ target }) {
	            if (target.value != "") {
	                this.todos.push({ text: target.value, done: false, id: Date.now() }),
	                    target.value = "";
	            }
	        },
	        removeTask(id) {
	            this.todos = this.todos.filter(todo => todo.id !== id);
	        }
	    }
	});



	new Vue({
	    el: "#app-3",
	    data: {
	        todos: []
	    },
	    methods: {
	        getRandom() {
	            return Math.round(Math.random() * 100);
	        },
	        addTask() {
	            this.todos.push({ text: this.getRandom() });
	        },
	    }
	});