
// // const backgroundChanger = document.getElementById("backgroundChanger")
// const changetext = document.getElementById("changetext")
// const Hello = document.getElementById("Hello")
// changetext.addEventListener("click",()=>{
//     Hello.textContent = "Hello world"
// //     window.document.body.style.background="black" //to get into the body
// })
//  // to change color
// const changecolor = document.getElementById("changecolor")
// changecolor.addEventListener("click",()=>{
//     window.document.body.style.background="black"
//      changecolor.background= "black"
// })
// const changecolor1 = document.getElementById("changecolor1")
// changecolor1.addEventListener("click",()=>{
//     window.document.body.style.background="white"
//      changecolor1.background= "white"
// })
// const outer= document.getElementById("outer")
// // // used to add dynamic contennt
// const click=document.getElementById("click")
// click.addEventListener("click",()=>{
//     const inner=document.createElement("div")
//     inner.setAttribute("id","inner")
//     inner.innerHTML="<p>inner</p>"
//     outer.appendChild(inner)
// })

const submitBtn=document.getElementById("submitBtn");
const output=document.getElementById("output");
console.log(userName)
submitBtn.addEventListener("click",(e)=>{
    const userName=document.getElementById("userName").value;   
    e.preventDefault();
    output.innerHTML=userName
}
)