const myForm=document.querySelector("form")
const inptask=document.getElementById("task")
const prioritySelect=document.getElementById("priority")
let tbody=document.querySelector("tbody")

let allTask=[]
myForm.addEventListener("submit",function(e)
{
    e.preventDefault();
    let Data=
    {
        input:inptask.value,
        priority:prioritySelect.value
    }
    allTask.push(Data)

    tbody.innerHTML=""
    allTask.map((ele)=>
    {
        const tr=document.createElement("tr")
        const td1=document.createElement("td")
        const td2=document.createElement("td")
        const td3=document.createElement("td")
        let btn=document.createElement("button")
        btn.innerText="Favourite"

        if(ele.priority=="High"){
            td2.style.backgroundColor="red"
        }
        else{
            td2.style.backgroundColor="green"
        }
    

        console.log(ele.input)
        td1.innerText=ele.input
        td2.innerText=ele.priority
        td3.append(btn)
        tr.append(td1,td2,td3)
        tbody.append(tr)
    })
})