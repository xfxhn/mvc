class Model {
    constructor() {
        this.list = [];
    }

    /*这里是先把控制层的改变view的方法传过来*/
    dispatch(callback, self) {
        this.dispatch = callback;
        this.self = self;
    }

    /*提交数据给controller层，让controller层通知view渲染视图*/
    _submit(list) {
        this.dispatch.call(this.self, list)
    }

    /*添加数据*/
    addItem(item) {
        this.list.push({
            text: item.text,
            id: item.id
        });
        /*把修改过后的数据给_submit*/
        this._submit(this.list)
    }

    /*删除数据*/
    deleteItem(id) {
        id = parseInt(id)
        this.list = this.list.filter(item => item.id !== id);
        this._submit(this.list)
    }
}


export default new Model()