class Stack{
    constructor(){
        this.count=0;
        this.item={};
    }
    // 添加一个（或几个）新元素到栈顶
    push(element) {
      this.items[this.count] = element;
      this.count++;
    }
}