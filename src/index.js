document.addEventListener("DOMContentLoaded", () => {
  // your code here
  taskPriority()
  dueDate()
  readMe()
  motivation()
  let form = document.querySelector('form');  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    addNewTask(event)
    form.reset();
  })
});

function addNewTask(event){
  
  let task = document.getElementById("new-task-description").value
  let li = document.createElement('li')
  

  // A priority value selected from a dropdown that is used to determine the color of the text in the list (red for high priority, yellow for medium, green for low)
  let color = getPriority()
  console.log ("task color is " + color)
  //li.style.color = color
  li.setAttribute("style", `background-color:${color}`);
  
  

  const ul = document.getElementById("tasks")
  ul.appendChild(li);

  //Due Date 
  let date = getDate()
  console.log("Task is due on " + date)
  
  li.setAttribute("contenteditable", "true")
  //Task + Due Date (text content)
  li.textContent = `${task}  ==>  ${date} `

  // Delete task button
  let btn = document.createElement('button')
  btn.textContent="X"
  li.appendChild(btn)
  //btn.addEventListener("click", () => li.remove())
  btn.addEventListener("click", deleteTask)

  // Edit task priority dropdown
  let taskId = task.split(" ").join("");
  li.setAttribute("id", taskId);
  let priority = document.createElement('select')
  let priorityId = taskId+`P`;
  priority.setAttribute("id", priorityId)
  priority.innerHTML += '<option value="transparent" selected="selected"> -- Edit Priority -- </option> <option value="red">High Priority</option> <option value="yellow">Medium Priority</option> <option value="green">Low Priority</option>'

  document.getElementById("tasks").appendChild(priority);
  priority.addEventListener("change", editPriority)
  
  

}

//A delete function that will remove tasks from your list
function deleteTask (event){
  event.target.parentNode.remove();
}

//Priority Dropdown
function taskPriority(){
  let dropdown = document.createElement('select');
  dropdown.setAttribute("id", "priority");
  dropdown.innerHTML += '<option value="transparent" selected="selected"> -- Select Task Priority -- </option> <option value="red">High Priority</option> <option value="yellow">Medium Priority</option> <option value="green">Low Priority</option>'

  let input = document.querySelector('input[type=submit]') 
  document.querySelector('form').appendChild(dropdown);
  document.querySelector('form').insertBefore(dropdown, input)
}

//Selected Priority
function getPriority() {
  let taskPriority = document.getElementById('priority').value;
  console.log(taskPriority);
  return taskPriority;
}

//Date Input & Label
function dueDate(){
  let label = document.createElement('label')
  label.setAttribute("for", "due-date")
  label.innerText = "Task Due Date: "

  let date = document.createElement('input')
  date.setAttribute('type', 'date')
  date.setAttribute('id', "due-date")
  
  let input = document.querySelector('input[type=submit]') 
  document.querySelector('form').appendChild(label);
  document.querySelector('form').insertBefore(label, input)
  document.querySelector('form').appendChild(date);
  document.querySelector('form').insertBefore(date, input)
}

//Select Task Due Date
function getDate(){
  let dueDate = document.getElementById('due-date').value;
  console.log(dueDate);
  return dueDate;
}

//Edit task priority from the list
function editPriority(event) {
  let priority = event.currentTarget.value
  let priorityId = event.currentTarget.id
  let taskId = priorityId.slice(0, -1)
  let task = document.getElementById(taskId)
  //task.style.color = priority;
  task.style.backgroundColor = priority;
}


//Read Me Text to explain how to Use to do list
function readMe(){
  let p = document.createElement("p")
  let i = document.createElement("i")
  p.appendChild(i)
  i.innerText = "Click on task to edit name and date. Use X button to delete task."
  document.getElementById("list").appendChild(p);
  let ul = document.getElementById("tasks");
  document.getElementById("list").insertBefore(p, ul);
}

//button to get some motivation
function motivation(){
  let btn = document.createElement('button');
  btn.textContent = "I need some Motivation!!!"
  btn.style.backgroundColor = "pink"
  btn.style.fontSize = "18px"
  btn.setAttribute("id", "motivation-btn")
  document.getElementById("list").appendChild(btn)
  document.getElementById("list").insertBefore(btn, document.getElementById("tasks"))

  let p = document.createElement('p');
  p.style.backgroundColor = "cyan"
  p.style.fontSize = "18px"
  p.style.textAlign = "center"
  p.setAttribute("id", "motivation-quote")
  document.getElementById("list").appendChild(p)
  document.getElementById("list").insertBefore(p, document.getElementById("tasks"))

  btn.addEventListener("click", getMotivation)
}

//Generates motivation quotes
function getMotivation(event){
  //array of quotes
  let motivation = [
    'Nothing will work unless you do. -Maya Angelou',
    'Failure is not the opposite of success: it\’s part of success -Arianna Huffington',
    'If your dreams don\’t scare you, they are too small.” -Richard Branson',
    'Believe you can and you\’re halfway there. -Theodore Roosevelt',
    'Quality means doing it right when no one is looking. -Henry Ford',
    'The difference between ordinary and extraordinary is that little extra. -Jimmy Johnson',
    'It always seems impossible until it\’s done. -Nelson Mandela', 
    'Progress is impossible without change, and those who cannot change their minds cannot change anything. -George Bernard Shaw',
    'What we fear of doing most is usually what we most need to do. -Ralph Waldo Emerson',
    'You are not your resume, you are your work. -Seth Godin',
    'Every accomplishment starts with the decision to try. -John F Kennedy',
    'Ability is what you\’re capable of doing. Motivation determines what you do. Attitude determines how well you do it. -Lou Holtz',
    'If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them. -Henry David Thoraeu',
    'People who wonder if the glass is half empty or half full miss the point. The glass is refillable. -Unknown',
    'Those who say it cannot be done should not interrupt those doing it. -Chinese proverb',
    'People often say that motivation doesn\’t last. Well, neither does bathing; that\’s why we recommend it daily. -Zig Ziglar',
    'If you think you are too small to make a difference, try sleeping with a mosquito. -Dalai Lama',
    'Never put off until tomorrow what you can do the day after tomorrow. -Mark Twain',
    'The best revenge is massive success. -Frank Sinatra',
    'Be humble. Be hungry. And always be the hardest worker in the room. -Dwayne \“The Rock\” Johnson',
    'We are what we repeatedly do. Excellence then, is not an act, but a habit. -Aristotle',
    'Work hard and be kind and amazing things will happen. -Conan O\’Brien',
    'Hard work beats talent when talent doesn\’t work hard. -Tim Notke',
    'There are no secrets to success. It is the result of preparation, hard work, and learning from failure. -Colin Powell'
  ]

  let random = []
  for (let i = 0; i < motivation.length; i++){
    random.push(i)
  }
  
  let quote = randomNumbers(random)
  document.getElementById("motivation-quote").textContent = motivation[quote]
}

//Generates random number from an array of numbers
function randomNumbers(array)
{
  return array[Math.floor(Math.random()*array.length)]
}
