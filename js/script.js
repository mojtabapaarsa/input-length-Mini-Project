let input = document.querySelector('input')
let counter = document.querySelector('.counter')

input.addEventListener('keyup' , (e)=> {
    let remainChar = input.maxLength - input.value.length ;
    counter.innerHTML = remainChar
})