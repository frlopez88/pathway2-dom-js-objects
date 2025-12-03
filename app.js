let car = {
    color: "Red",
    milelife: 100,
    make: "Toyota",
    year: 2005,
    new: false
};
console.log(car);
// dot notation
console.log(car.year);
// bracket notation 
console.log(car["year"]);

let people = [
    {
        name: "Fernando",
        email: "fernando.lopez@codex.academy"
    },
    {
        name: "Messi",
        email: "messi@codex.academy"
    }
];


let taskDataBase = [{
    taskNames: "Laundry",
    taskDurations: 1
},
{
    taskNames: "Study JS",
    taskDurations: 4
},
{
    taskNames: "Watch The Batman",
    taskDurations: 3
},
{
    taskNames: "Homeworks",
    taskDurations: 2
}
];

let taskList = document.getElementById("taskList");
// how can we add the content of the taskDataBase to the ol=taskList

// this i++ is equal to i = i + 1;

for (let i = 0; i < taskDataBase.length; i++) {
    // modifying the content of the html element
    taskList.innerHTML += `<li class="list-group-item">
    <strong>${taskDataBase[i].taskNames}</strong> : ${taskDataBase[i].taskDurations}
    </li>`
}


let dataQualityTracking = [{
    feedbackComment: "I didn't like the food",
    satisfactionRatings: 2.2
},
{
    feedbackComment: "Good Service",
    satisfactionRatings: 5
},
{
    feedbackComment: "Nice Music",
    satisfactionRatings: 4
},
{
    feedbackComment: "Nice View",
    satisfactionRatings: 5
}
];
// push() -> we use this method to add 1 element at the end
// of the array;


let qualityTracking = document.getElementById("qualityTracking");

let tablaData = ""

for (let i = 0; i < dataQualityTracking.length; i++) {
    tablaData += '<tr>'
    tablaData += `<td>${dataQualityTracking[i].feedbackComment}</td>`;
    tablaData += `<td>${dataQualityTracking[i].satisfactionRatings}</td>`;
    tablaData += '</tr>'

}

qualityTracking.innerHTML = tablaData;



function addContact(){

    event.preventDefault();

    let contactName = document.getElementById("contactName");
    let contactEmail = document.getElementById("contactEmail");

    people.push( {
        name : contactName.value,
        email : contactEmail.value
    } );

    console.table(people);

}