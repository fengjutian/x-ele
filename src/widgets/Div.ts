class Div{
    div: HTMLDivElement
    constructor(data: string) {
        this.div = document.createElement('div')
        this.div.innerText = data
    }


    mixEle(data: string) {

        return this
    }

    render() {
        return this.div.outerHTML
    }


}

export default Div;