class Tab{
    constructor(id){
        //获取元素
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelector('section');
        this.innit();

    }
    innit(){
        //innit初始化操作让相关元素绑定事件
        for (var i=0;i<this.lis.length;i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
        }
    }
    //切换功能
    toggleTab(){
        this.clearClass();
        this.className = 'liactive';

    }
    clearClass(){
        for(vari=0;i<this.lis.length;i++){
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //添加功能
    addTab(){
        
    }
    //删除功能
    removeTab(){

    }
    //编辑功能
    editTab(){

    }
}
new Tab('#tab');