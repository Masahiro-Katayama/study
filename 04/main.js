var vm = new Vue({
  el: '#app',
  data: {
    todos: [],
    newToDo: '',
    uniqueKey: 0,
  },

  mounted() {
    this.loadTodo();
  },

  methods: {
    addToDo() {
      if (this.newToDo) {
        this.todos.push({
          title: this.newToDo,
          id: ++this.uniqueKey
        });
        this.newToDo = '';
        this.saveTodo();
      }
    },
    deleteToDo(deleteIndex) {
      var check = confirm('本当に削除しますか？');
      if (check === true) {    //アラートでOKが押下されたら
        this.todos.splice(deleteIndex, 1);
        this.saveTodo();
      }
    },
    allClear() {
      var check = confirm('本当に削除しますか？');
      if (check === true) {    //アラートでOKが押下されたら
        this.todos = [];
        this.saveTodo();
      }
    },
    saveTodo() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    loadTodo() {
      if (localStorage.todos) {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      }
    },
  },
})
