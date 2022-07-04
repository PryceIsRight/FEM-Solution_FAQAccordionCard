const faqQuestion = document.querySelectorAll('.faq-question');
const faqAnswer = document.querySelectorAll('.faq-answer');

function removeActiveClass() {
    faqQuestion.forEach(question => {
        question.classList.remove('active')
    })
}

function addHiddenClass() {
    faqAnswer.forEach(answer => {
        answer.classList.add('hidden')
    })
}

faqQuestion.forEach(question => {
    question.addEventListener('click', () => {
        let activeAnswer = question.nextElementSibling;

        if (question.classList.contains('active')) {
            removeActiveClass()
            addHiddenClass();
        } else {
            removeActiveClass()
            addHiddenClass();
            question.classList.add('active')
            activeAnswer.classList.remove('hidden')
        }
    })
})

