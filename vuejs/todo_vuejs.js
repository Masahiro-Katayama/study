const STORAGE_KEY = 'questions'
let idCounter = 1;

Vue.component('question-table', {
  props: ['dt'],
  template: `<td>{{dt.id}}:{{dt.text}}
            <button id=""> 削除</button >
            </td > `

})

new Vue({
  el: '#app',
  data: {
    addText: '',
    questions: []
  },

  mounted() {
    this.questions = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    this.questions.sort((a, b) => {
      if (a.number < b.number) return -1;
      if (a.number > b.number) return 1;
      return 0;
    });
  },

  methods: {
    setStorage() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.questions))
    },
    add() {
      if (this.addText) {
        this.questions.push({ id: idCounter, text: this.addText });
        this.setStorage();
        idCounter++;
      }
      this.addText = '';
    }
  }
})
