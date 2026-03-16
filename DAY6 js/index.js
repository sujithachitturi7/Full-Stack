// const header = document.getElementById("header")
// console.log(header)
// header.style.color = "blue"

// // used for all over at once with taking a arr 
// const classselector = document.getElementsByClassName("classselector");
// const arr = Array.from(classselector)
// console.log(classselector[0])
// classselector[0].style.color = "blue"
// classselector[1].style.color = "blue"
// classselector[2].style.color = "blue"

// arr.forEach((ele)=>{
//     ele.style.color="blue"
// })
// const h3 = document.getElementsByTagName("h3")
// console.log(h3)
//  h3[0].style.color="blue"
// const arr1 = Array.from(h3)
// arr1.forEach((ele)=>{
//     ele.style.color="blue"
//    ele.style.background="red"
// })
// // used for one line without taking a arr
// const classselector= document.querySelector(".classselector")
// console.log(classselector)
// classselector.style.color="blue"
// const h3= document.querySelector("h3")
// console.log(h3)
// h3.style.color="blue"
// // used for all over at once without taking a arr
// const classselector = document.querySelectorAll(".classselector")
// console.log(classselector)

// classselector.forEach((ele)=>{
//     ele.style.color="blue"
// })
// const h3 = document.querySelectorAll("h3")
// console.log(h3)

// h3.forEach((ele)=>{
//     ele.style.color="blue"
// }) 
// // used to change all over text and adding of text
const header = document.querySelector("#header")
const main = document.getElementById("main")

header.textContent = "hello adam!, how are u?"
main.innerHTML="<p>this is the innerHTML text</p>"
const outer= document.getElementById("outer")
// // used to add dynamic content
const inner=document.createElement("div")
inner.setAttribute("class","inner")
inner.innerHTML="<p>hello</p>"
outer.appendChild(inner)



