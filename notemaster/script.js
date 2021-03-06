let app = new Vue({
  el: "#app",
  data: {
    title: "Notemaster",
    note: {
      title: "",
      text: ""
    },
    notes: [
      {
        title: "Welcome",
        text: "Hello Guys",
        date: Date(Date.now().toLocaleString())
      }
    ],},
  methods: {
    addNote() {
      let { text, title } = this.note;
      this.notes.push({
        text,
        title,
        date: Date(Date.now().toLocaleString())
      });
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    }
  }
});
