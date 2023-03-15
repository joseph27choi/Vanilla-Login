

const callback = document.getElementById('callback');


const filler = (event) => {
    console.log(event);
}

callback.addEventListener("click", (e)=>filler(e))



const animals = ['dog', 'cat'];

animals.map( (value, index) => {
    console.log(value);
});

const dogOnly = animals.filter( (animal) => {
    return animal === 'dog';
});




