const students= [

    { name:'komal'},
    { name: "maya"},
       { name:"raj"},
       { name:"diksha"},
       { name:"dipali"},
       { name:"akshada"},
       { name: "rutuja"},
       { name: "ram"},
    { name:"vaishnavi"},
    {name:"harshada"},


];



const studentsContainer = document.getElementById('students-container');

function displaystudents(studentList) {
studentsContainer.innerHTML = '';
studentList.forEach((student) => {
  studentsContainer.innerHTML += `
    <div class='student-card'>
      <span>${student.name}</span>
    </div>
  `;
});
}

displaystudents(students);

function filterstudents() {
const searchQuery = document.getElementById('search').value.toLowerCase();
const filteredstudents = students.filter(student => 
  student.name.toLowerCase().includes(searchQuery)
);
displaystudents(filteredstudents);
}