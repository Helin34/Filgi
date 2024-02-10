const quizData=[
    {
        question:'İlk defa dünya haritasını kim çizmiştir?',
        a:'Mimar Sinan',
        b:'Piri Reis',
        c:'Namık Kemal',
        d:'Hezarfen',
        e:'İbn-i Heysem',
        correct:'b',
    },
    {
        question:'Fransa ile İngiltere’yi birbirine bağlayan tünelin adı nedir?',
        a:'Manch Tüneli',
        b:'Gotthard Base Tüneli',
        c:'Zigana Tüneli',
        d:'Zigana Tüneli',
        e:'Akatlar Tüneli',
        correct:'a',
    },
    {
        question:'Dünyanın en uzun nehrinin adı nedir?',
        a:'Lena Nehri',
        b:'Kızılırmak',
        c:'Kongo Nehri',
        d:'Amazon',
        e:'Nil Nehri',
        correct:'e',
    },
    {
        question:'Aya ilk defa kaç yılında ve kim ayak bastı?',
        a:'1957 yılında Valeri Polyakov',
        b:'1898 Sergei Avdeyev',
        c:'1956 yılında Vlademir Titov',
        d:'1969 yılında Neil Armstrong',
        e:'1968 yılında Scott Kelly',
        correct:'d',
    },
    {
        question:'Voleybol nerde icat edildi?',
        a:'İspanya',
        b:'Fransa',
        c:'Amerika',
        d:'İngiltere',
        e:'Almanya',
        correct:'c',
    },

]
const quiz=document.getElementById("quiz")
const answerEls= document.querySelectorAll(".answer")
const questionEl= document.getElementById("question")
const a_text=document.getElementById("a_text")
const b_text=document.getElementById("b_text")
const c_text=document.getElementById("c_text")
const d_text=document.getElementById("d_text")
const e_text=document.getElementById("e_text")
const submitBtn= document.getElementById("submit")

let currentQuiz=0
let score=0
loadQuiz()

function loadQuiz()
{
    const currentQuizData=quizData[currentQuiz]
deselectedAnswers()

    questionEl.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
    e_text.innerText=currentQuizData.e


}
function deselectedAnswers(){
    answerEls.forEach(answerEl => answerEl.checked=false)

}

function getSelected(){
let answer

answerEls.forEach(answerEl=>{
    if(answerEl.checked){
        answer = answerEl.id
    }
})
return answer
}
submitBtn.addEventListener("click", ()=>{
    const answer=getSelected()

    //console.log(answer)


    if(answer){
        if(answer==quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz< quizData.length){
            loadQuiz()
        }
        else{
            quiz.innerHTML= `
            <h2>Test Tamamlandı, ${score*20} puan aldınız 🥳 </h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene </button>

            `

        }
    }
})