饿了么前端干货大收集。

<h1>1.引用传递</h1>

1. 按值传递：

<code>
function addNum(num)
{ 
　num+=10; 
　return num; 
} 
var num=10; 
var result=addNum(num); 
console.log(num);
console.log(result);
</code>
当为函数传递参数的时候，是将此值复制一份传递给函数，所以在函数执行之后，num本身的值并没有被改变，函数中被改变的值仅仅是一个副本而已。

2. 对象引用：

<code>
function setName(obj)
{ 
  obj.name="青岛新锐"; 
} 
var web=new Object(); 
web.name="蚂蚁部落";
setName(web); 
console.log(web.name);
</code>

3. 混搭下：

<code>
function setName(obj)
{ 
  obj.name="青岛新锐"; 
  obj=new Object(); 
  obj.name="蚂蚁部落"; 
} 
var web=new Object(); 
setName(web); 
console.log(web.name);
</code>

<code>
function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);    
console.log(obj2.item);
</code>


