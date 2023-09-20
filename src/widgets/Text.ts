
interface styleI {
    style?: {},
    class?: string[]
}


class Text{
    text: HTMLSpanElement

    constructor(data: string) {
        this.text = document.createElement('span')
        this.text.innerText= data
    }

    style(data: styleI) {
        let _style = data.style
        let _attrStr = '';
        for(let [k, v] of Object.entries(_style)) {
            _attrStr += `${k}:${v};`
        }
        this.text.setAttribute("style", _attrStr)

        let _class = data.class?.join(' ')
        this.text.setAttribute("class", _class)

        return this
    }

    event(fn: any) {
        // this.text.setAttribute("onClick", fn)

        // this.text.onclick = _ => () => {
        //     console.log(111)
        // }
    
        return this
    }

    render() {
        console.log('this.text',  this.text)
        return this.text.outerHTML
    }

}

export default Text;