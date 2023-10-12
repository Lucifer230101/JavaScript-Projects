//local reviews data
const reviews = [
  {
    id: 1,
    name: "Saurav Garje",
    job: "Developer",
    img: "person-img.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Remcommodi fuga voluptates tenetur laboriosam qui recusandae.",
  },
  {
    id: 2,
    name: "John Smith",
    job: "UX Designer",
    img: "person-img.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Remcommodi fuga voluptates tenetur laboriosam qui recusandae.",
  },
  {
    id: 3,
    name: "Samuel Jackson",
    job: "Backend Developer",
    img: "person-img.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Remcommodi fuga voluptates tenetur laboriosam qui recusandae.",
  },
  {
    id: 4,
    name: "Mona Lisa",
    job: "Marketing Manager",
    img: "person-img.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Remcommodi.",
  },
];

// Select Items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item
let currentItem = 0;

//Load initial item
window.addEventListener('DOMContentLoaded', function(){
   showPerson(currentItem);
});

//show person based on item
function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem>reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

//show previous person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem<0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})

//show random person

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})