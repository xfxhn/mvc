class View {
    constructor() {
        /*初始化元素*/
        this.app = this.getElement('#root');

        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.name = 'name';

        this.buttom = this.createElement('button');
        this.buttom.textContent = '点击';

        this.list = this.createElement('ul', 'list');

        this.div = this.createElement('div');
        this.div.append(this.input, this.buttom);

        this.app.append(this.div, this.list)
    }

    getElement(el) {
        return document.querySelector(el);
    }

    createElement(el, className) {
        const tag = document.createElement(el);
        className && tag.classList.add(className);
        return tag
    }


    get itemValue() {
        return this.input.value;
    }

    clearValue() {
        this.input.value = ''
    }


    /*每次数据改变，要调用这个函数重新渲染
    * 这个是model数据改变了，由controller调用
    * */
    render(list) {
        /*先删除元素*/
        while (this.list.firstElementChild) {
            this.list.removeChild(this.list.firstElementChild)
        }
        if (!list.length) {
            const p = this.createElement('p');
            p.textContent = '请输入文字添加标签';
            this.list.append(p)
        } else {
            /*把元素渲染出来*/
            list.forEach(item => {
                const li = this.createElement('li');
                li.id = item.id;

                const button = this.createElement('button', 'delete');
                button.textContent = '删除';

                const p = this.createElement('p');
                p.textContent = item.text;

                li.append(p, button);
                this.list.appendChild(li)
            })
        }
    }

    /*监听用户触发了什么事件，并暴露出去,传给controller层，让model层改变数据
    * 然后调用render重新渲染页面
    * 并且接受一个控制器，用来触发controller层调用model修改数据
    * */
    bindAddItem(hander, self) {
        this.buttom.addEventListener('click', () => {
            hander.call(self, {
                text: this.itemValue,
                id: +new Date()
            });
            this.clearValue()
        })
    }

    bindDeleteItem(hander, self) {
        this.list.addEventListener('click', ev => {
            if (ev.target.className === 'delete') {
                let id = ev.target.parentNode.id;
                hander.call(self, id)
            }
        })
    }


}


export default new View()