class Div{
    div: HTMLDivElement
    constructor(data: string) {
        this.div = document.createElement('div')
        this.div.innerText = data
    }

    render() {
        return this.div.outerHTML
    }


}

export default Div;