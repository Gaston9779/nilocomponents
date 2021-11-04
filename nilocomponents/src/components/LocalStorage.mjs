export default class LocalStorage {
    getData = (key) => { return JSON.parse(localStorage.getItem(key)) || null }

    addData = (key, data) => {
        try {
            let savedData = this.getData.push(data)
            localStorage.setItem(key, JSON.stringify(savedData))
            console.log("local storage updated")
        } catch (error) {
            console.log("local storage updated")
        }
    }
}

