class Event {
    constructor() {
        this._state = null;
        this._listens = []
    }

    subscriber(listen) {
        this._listens.push(listen)
    }

    notify(state) {
        this._listens.forEach(listen => listen(state))
    }

    getSate() {
        return this._state
    }
}


export default new Event()