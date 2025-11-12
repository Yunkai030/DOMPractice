const container = document.querySelector("#container");
const p = document.createElement("p");  // 1. 创建 <p>
p.textContent = "Hey I'm red!";         // 2. 添加文字
p.style.color = "red";                  // 3. 设定样式（红色）
container.appendChild(p);               // 4. 加入到 container


const container2 = document.querySelector("#container2")
const h3 = document.createElement("h3")
h3.textContent = "I'm a blue h3!"
h3.style.color = "blue"
container2.appendChild(h3)



const div = document.createElement("div")
div.style.border = "1px solid black"
div.style.backgroundColor = "pink"

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"

const p2 = document.createElement("p2")
p2.textContent = "ME TOO!"

div.appendChild(h1)
div.appendChild(p2)

container2.appendChild(div)

const button1 = document.querySelector("#button1");

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

button1.addEventListener("click",alertFunction)


