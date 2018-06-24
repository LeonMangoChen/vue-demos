const TODOS_KEY = 'todos'
export default {
  get () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  },
  set (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  remove () {
    localStorage.removeItem(TODOS_KEY)
  }
}
