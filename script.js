const testimonials = [
    {
        name: "Sarah",
        message:
        "Nacima and Eddie are hardworking learners who are always willing to improve their technical skills."
    },
    {
        name: "Ahmed",
          message:
          "Working with Nacima and Eddie was a great experience. They communicate well and enjoy solving problems."
    },
    {
        name: "Amina",
          message:
          "They are passionate about technology and consistently show enthusiasm for learning and building new projects."
    },
];
// Get the testimonial container
const testimonialContainer =
document.getElementById("testimonial-container");
// Loop through the testimonials
testimonials.forEach(function (testimonial) {
    // Create a card
    const testimonialCard =
    document.createElement("article");
    // Add the card class
    testimonialCard.classList.add("card");
    // Add testimonial information
    testimonialCard.classList.add("card");
    // Add testimonial information
    testimonialCard.innerHTML = `
    <h3>${testimonial.name}</h3>
    <p>"${testimonial.message}"</p> 
    `;
// Add the card to the webpage
testimonialContainer.appendChild(testimonialCard);
});
const projects = [
    {
        title: "Personal Portfolio",
        description:
        "A responsive portfolio website created to showcase our skills, projects and software engineering learning journey.",
        technologies:
        "HTML, CSS, JavaScript"
        },
    {
        title: "Banking Website",
        description:
       "A professional banking website concepts created to practice webpage layouts, navigation and interactives javascript features.",
        technologies:
        "HTML, CSS, JavaScript"
    }
];
// Get the project container
const projectContainer =
document.getElementById("project-container");
// Loop through the projects
projects.forEach(function (project) {
    // Create a project card
    const projectCard =
    document.createElement("article");
    // Add the card class
    projectCard.classList.add("card");
    // Add project information
    projectCard.innerHTML = `
    <h3>${project.title}</h3>
    <p>
          ${project.description}
        </p>
    
        <p class="tech">
Technologies: ${project.technologies}
        </p>
        `;
        // Add the project card to the webpage
        projectContainer.appendChild(projectCard);
        });
console.log("welcome to Naima and Eddie'sportofolio!"
console.log("Our projects:',projects); 
console.log("Our testimonials:",testimonials); 
function showprojects(){
    projects.foreach(function(projects){
        console.log(projects.title);
        console.log(projects.description);
    });
}
showprojects();
function showTestimonials() {
  testimonials.forEach(function(testimonial) {
    console.log(testimonial.name);
    console.log(testimonial.message);
  });
}

showTestimonials();
function welcomeMessage() {
  console.log("Welcome to the Naima and Eddie portfolio!");
}

welcomeMessage();
