class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        /*把触发更新的先传给model*/
        this.model.dispatch(this.dispatch, this);

        this.view.bindAddItem(this.handleAddItem, this);
        this.view.bindDeleteItem(this.handleDeleteItem, this);

    }

    /*model层数据变了触发这个函数通知view层更新*/
    dispatch(list) {
        this.view.render(list)
    }

    handleAddItem(item) {
        this.model.addItem(item)
    }

    handleDeleteItem(id) {
        this.model.deleteItem(id)
    }


}


export default Controller