// const btn = document.querySelectorAll(".question-btn")

// btn.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     })
// })

// const Questions = document.querySelectorAll(".question")

// Questions.forEach(function(question){
//     let btn = question.querySelector(".question-btn")
//     btn.addEventListener("click", function(){

//         Questions.forEach(function(item){
//             if(question !== item){
//                 item.classList.remove("show-text")
//             }
//         })
//         question.classList.add("show-text")

//     })

// })

// const Questions = document.querySelectorAll(".question")

// Questions.forEach(function(question){
//     let btn = question.querySelector(".question-btn")

//     btn.addEventListener("click", function(){

//         Questions.forEach(function(item){
//             // console.log(item);
//             if(question !== item){
//                 item.classList.remove("show-text")

//             }
//         })
//         question.classList.add("show-text")
//     })

// })


const QuestionsBtn = document.querySelectorAll(".question-btn")

QuestionsBtn.forEach(function(btn){
    // console.log(btn);
btn.addEventListener("click", function(e){
    let question = e.currentTarget.parentElement.parentElement
    // console.log(question);

    question.classList.add("show-text")
})
})