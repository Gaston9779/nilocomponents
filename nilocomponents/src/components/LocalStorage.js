export default class LocalStorage {
    getData = (key) => { return JSON.parse(localStorage.getItem(key)) || false }

    addData = (key, data) => {
        try {
            let savedData = this.getData(key) || []
            savedData.push(data)
            localStorage.setItem(key, JSON.stringify(savedData))
            console.log("local storage updated")
        } catch (error) {
            console.log(error)
        }
    }
}

