//1.var let const的用法
function fn() {
    var a = 3;//全局变量
    let b = 2;//块级作用域  是局部变量
}
console.log(a); //3;
console.log(b); //会报错，b is not defined;

const c = 2;// 块级作用域  声明必须初始化，声明一个常量
const d = {
    //如果const 声明的是一个对象或者数组，可以修改对象的属性或者数组元素！
};

//2.箭头函数
(形参) => {
    //只有一个形参的时候，可以不写括号
    //函数体
    //箭头函数里面的this指向上下文。
}
(形参) => [1,2,3]; //可以直接写一个返回值，数字或者字符串或者数组
(形参) => ({
    name:'Lili',
    age:18,
})//如果返回的是一个对象，则必须用()把{}包起来
let obj = {
    fn: () => {
        console.log(this);
    },
    fn(); //this指向的是obj这个函数，因为调用fn的是obj.fn();
}
var fn = () => {
    console.log(this); //this 指向的是window ，因为调用fn的是 window
}

//3.模板字符串
var Firstname = 'Yang',
    Lastname = 'Manman';
console.log('My name is' + Firstname + ' ' + Lastname + '!');
console.log(`My name is 
${Firstname} ${Lastname} !`) //换行也是可以保留的 ${ 3 > 2 ? 'Mike' : 'Lili'}也可以写表达式
