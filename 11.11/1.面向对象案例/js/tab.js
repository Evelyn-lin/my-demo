var that;
class Tab {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        //获得li的父元素
        this.ul = this.main.querySelector('ul');
        //获得section的父元素
        this.fsection = this.main.querySelector('.tabscon');
        this.add = this.main.querySelector('.tabadd');
        this.init();
        
    }
    //初始化操作
    init() {
        this.updateNode();
        //让每个元素绑定事件
        this.add.onclick = this.addTab;
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].onclick = this.toggleTab; //绑定切换
            this.lis[i].index = i; //拿到索引号
            this.remove[i].onclick = this.removeTab; //绑定移除
            this.spans[i].ondblclick = this.editTab;//绑定修改            
            this.sections[i].ondblclick = this.editTab;//绑定修改
        }        
    }
    updateNode() {
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.spans = this.main.querySelectorAll('span:first-child');
        this.remove = this.main.querySelectorAll('.icon-guanbi');

    }
    //切换功能
    toggleTab() {
        that.clearclassName();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive';
    }
    clearclassName() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }
    //添加功能
    addTab() {
        that.clearclassName();
        //(1)创建li元素和section元素
        var random = Math.random();
        /* var li = document.createElement('li');
        li.innerHTML = '新选项卡';
        var section = document.createElement('section');
        section.innerHTML = '测试' + random;
        that.ul.appendChild(li);
        that.fsection.appendChild(section);
        that.init();
        li.className = 'liactive';
        section.className = 'conactive'; */
        var li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></li>';
        var section = '<section class="conactive">测试 ' + random + '</section>';
        that.ul.insertAdjacentHTML('beforeend',li);
        that.fsection.insertAdjacentHTML('beforeend',section);
        that.init();
    }
    //修改功能
    editTab() {
     var str = this.innerHTML;
     this.innerHTML = '<input type = "text">';
     var input = this.querySelector('input');
     input.value = str;
     input.focus();
     input.onblur = function(){
         var str = this.value;
         this.parentNode.innerHTML = str;
     }
     }
    //删除功能
    removeTab(e) { 
        e.stopPropagation();//阻止冒泡 防止出发li的切换点击事件
        var index = this.parentNode.index;
        //根据索引号删除对应的li和section
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        //当我们删除的不是选中状态的li的时候，原来的选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        //当我们删除是选中状态li的时候，让他前一个li被选中
        index ? that.lis[index-1].onclick() : that.lis[index].onclick();
    }
}
new Tab('#tab');