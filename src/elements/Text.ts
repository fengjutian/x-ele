class Text{
    text: HTMLSpanElement

    constructor(data: string) {
        this.text = document.createElement('span')
        this.text.innerText= data
    }

    style(data: object) {

        return this
    }

    event(events: any) {

        this.text.onclick = _ => () => {
            console.log(111)
        }
    
        return this
    }

    render() {
        console.log('this.text',  this.text)
        return this.text.outerHTML
    }

}

export default Text;