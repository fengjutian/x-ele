class Text{
    text: HTMLSpanElement

    constructor() {
        this.text = document.createElement('span')
    }

    init(data: string) {
        this.text.innerText= data
        return this;
    }

    style(data: object) {

        

        return this
    }

    event(events: any) {
        console.log('events', events)

        // for(let [k, v] of Object.entries(events)) {
        //     this.text.addEventListener(String(k).toLowerCase(), v)
        // }

        console.log('this.text', this.text)

        this.text.onclick = _ => () => {
            console.log(111)
        }

        // this.text.setAttribute('onclick', `() => {
        //     console.log(111)
        // }`)

    
        return this
    }

    render() {
        console.log('this.text',  this.text)
        return this.text.outerHTML
    }

}

export default Text;