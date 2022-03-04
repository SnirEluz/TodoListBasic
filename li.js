// QuerySelector
const container = document.querySelector(".container")
const inp = document.querySelector(".inp")
const ul = document.querySelector(".ul")
const box = document.querySelector(".box")
const boxoful = document.querySelector(".boxoful")
const h1ofheader = document.querySelector(".h1")
const boxofheader = document.querySelector(".boxofheader")
// AppendChild
document.body.appendChild(container)
container.appendChild(box)
box.appendChild(boxofheader)
boxofheader.appendChild(h1ofheader)
boxofheader.appendChild(inp)
box.appendChild(boxoful)
boxoful.appendChild(ul)
// classname
inp.className = "inp"
let num = 0
//array
let tasks = []
if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"))
    for (let i = 0; i < tasks.length; i++) {
        createTask(tasks[i].task)
    }
}
inp.addEventListener("keydown", function (e) {
    if (inp.value && e.keyCode == 13 && num < 4) {
        // JSON
        tasks.push({ task: inp.value })
        localStorage.setItem("tasks", JSON.stringify(tasks))
        createTask(inp.value)
    } else if (inp.value && e.keyCode == 13 && num >= 4) {
        // createElement
        const editDiv = document.createElement("div")
        const editDivTitle = document.createElement("h1")
        const editDivBtn = document.createElement("button")
        // textContent
        editDivBtn.textContent = "Yes"
        editDivTitle.textContent = "Would You Like To Get More Space"
        // className
        editDiv.className = "editDiv"
        // appendChild
        box.appendChild(editDiv)
        editDiv.appendChild(editDivTitle)
        editDiv.appendChild(editDivBtn)

        editDivBtn.addEventListener("click", function (a) {
            num = 0
            a.target.parentElement.remove()
            console.log(num)
        })
        console.log("you are maximum list")
    }
})
function createTask(taskP) {
    // createElement
    const li = document.createElement("li")
    const firstletter = document.createElement("p")
    const name = document.createElement("p")
    const remove = document.createElement("button")
    const edit = document.createElement("button")
    // textContent
    firstletter.textContent = "• "
    name.textContent = taskP
    remove.textContent = "X"
    edit.textContent = "Edit"
    inp.value = ""
    // clasNmae
    li.className = "liclass"
    remove.className = "remove"
    edit.className = "edit"
    name.className = "name"
    firstletter.className = "firstletter"
    // appendChild
    li.appendChild(firstletter)
    li.appendChild(name)
    li.appendChild(remove)
    li.appendChild(edit)
    ul.appendChild(li)
    // addEventListenr
    remove.addEventListener("click", function (a) {
        remove.textContent = name.textContent
        if (num == 0) {
            a.target.parentElement.remove()
            num = 3
            tasks = tasks.filter(function (n) {
                return n.task != a.target.textContent
            })
            localStorage.setItem("tasks", JSON.stringify(tasks))
            console.log(num)
            console.log('yes')
        } else {
            a.target.parentElement.remove()
            num -= 1
            tasks = tasks.filter(function (n) {
                return n.task != a.target.textContent
            })
            localStorage.setItem("tasks", JSON.stringify(tasks))
            console.log(num)
            console.log('no')
        }
    })
    edit.addEventListener("click", function (e) {
        // createElement
        const editDiv = document.createElement("div")
        const editDivTitle = document.createElement("h1")
        const editDivInp = document.createElement("input")
        editDivInp.setAttribute("maxlength", 78)
        const editDivBtn = document.createElement("button")
        // textContent
        editDivBtn.textContent = "X"
        editDivTitle.textContent = "Edit Your List"
        editDivInp.value = name.textContent
        // className
        editDiv.className = "editDiv"
        // appendChild
        box.appendChild(editDiv)
        editDiv.appendChild(editDivTitle)
        editDiv.appendChild(editDivInp)
        editDiv.appendChild(editDivBtn)
        // addEventListener
        // clikc
        editDivBtn.addEventListener("click", function (e) {
            e.target.parentElement.remove()
        })
        // keydown
        editDivInp.addEventListener("keydown", function (e) {
            if (editDivInp.value && e.keyCode == 13) {
                let t = tasks.find(function (n) {
                    return n.task == name.textContent
                })
                name.textContent = editDivInp.value
                t.task = editDivInp.value
                localStorage.setItem("tasks", JSON.stringify(tasks))
                console.log(editDivInp.value)
                e.target.parentElement.remove()
            }
        })
    })
    // 3
    num += 1
    console.log(num)
}


