

export default class View {
    init() {
        return 'Hello'
    }

    static render(data: any){
        let ele = '';
        for(let i of data) {
            ele+=`${i}`
        }

        return ele;
    }
}