class Tab {
    constructor(id) {
        // 获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.section = this.main.querySelectorAll('section');
        this.init();
    }
    init() {
        // init初始化操作让相关的元素绑定事件
        for(var i=0; i<this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = function() {
                console.log(this.index);
                
             }        
        }
    }
    // 切换功能
    toggleTab(){}
    // 添加功能
    addTab () {}
    // 删除功能
    removeTab() {}
    // 修改功能
    editTab() {}
}
new Tab('#tab');