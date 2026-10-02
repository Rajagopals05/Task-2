document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Dynamic To-Do List Logic ---
    const todoInput = document.getElementById("todoInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", addTask);

    function addTask() {
        const text = todoInput.value.trim();
        if (text === "") return;

        const li = document.createElement("li");
        
        const span = document.createElement("span");
        span.textContent = text;
        span.addEventListener("click", () => li.classList.toggle("completed"));

        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.className = "delete-btn";
        delBtn.addEventListener("click", () => li.remove());

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);

        todoInput.value = "";
    }

    // --- 2. Form Validation Logic ---
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        let isValid = true;

        // Clear existing errors
        document.getElementById("nameError").textContent = "";
        document.getElementById("emailError").textContent = "";
        document.getElementById("messageError").textContent = "";
        document.getElementById("formSuccess").textContent = "";

        // Name Validation
        if (nameInput.value.trim() === "") {
            document.getElementById("nameError").textContent = "Full name is required.";
            isValid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            document.getElementById("emailError").textContent = "Email address is required.";
            isValid = false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            document.getElementById("emailError").textContent = "Please enter a valid email address.";
            isValid = false;
        }

        // Message Validation
        if (messageInput.value.trim() === "") {
            document.getElementById("messageError").textContent = "Message field cannot be empty.";
            isValid = false;
        }

        // Success State
        if (isValid) {
            document.getElementById("formSuccess").textContent = "Form submitted successfully!";
            contactForm.reset();
        }
    });
});