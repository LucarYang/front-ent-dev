class Stack{
    constructor (){
        this.item=[]
    }
    // 添加一个（或几个）新元素到栈顶
    push(element){
        this.item.push(element)
    }
    // pop()：移除栈顶的元素，同时返回被移除的元素。
    pop(){
        return this.item.pop()
    }
    // peek()：返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
    peek(){
        return this.item[this.item.length-1]
    }
    // isEmpty()：如果栈里没有任何元素就返回true，否则返回false。
    isEmpty(){
        return this.item.length===0
    }
    // clear()：移除栈里的所有元素。
    clear(){
        return this.item=[]
    }
    //size()：返回栈里的元素个数。该方法和数组的length属性很类似。
    size(){
        return this.item.length;
    }
}

const stack=new Stack();

stack.push(0);
stack.push(8)
console.log(stack.size())
console.log(stack.peek())


    console.log(stack.isEmpty()); // 输出为true