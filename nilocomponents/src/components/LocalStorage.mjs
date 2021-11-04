export default class LocalStorage {
    constructor() {
        this.choices = choices
        this.win = points.win
        this.lose = points.lose
        this.message = message
    }

    getData = (key) => { return JSON.parse(localStorage.getItem(key)) || null }

    addData = (key, data) => {
        try {
            localStorage.setItem(key, JSON.stringify(data))
            console.log("local storage updated")
        } catch (error) {
            console.log("local storage updated")
        }
    }
}

