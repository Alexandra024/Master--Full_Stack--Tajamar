const tasks = [];

const taskInput =
    document.querySelector("#taskInput");

const addTaskBtn =
    document.querySelector("#addTaskBtn");

const taskList =
    document.querySelector("#taskList");

const totalTasks =
    document.querySelector("#totalTasks");

const completedTasks =
    document.querySelector("#completedTasks");


    function updateCounters() {

        totalTasks.textContent =
            tasks.length;

        completedTasks.textContent =
            tasks.filter(task => task.completed)
                .length;
    }

    function renderTasks() {

        taskList.innerHTML =
            tasks.map(task => `

            <div
                class="card mb-3"
                data-id="${task.id}">

                <div class="card-body d-flex justify-content-between align-items-center">

                    <span class="${task.completed ? "text-decoration-line-through text-secondary" : ""}">
                        ${task.title}
                    </span>

                    <div>

                        <button
                            class="btn btn-warning btn-sm edit-btn"
                            data-id="${task.id}">
                            Editar
                        </button>

                        <button
                            class="btn btn-success btn-sm complete-btn"
                            data-id="${task.id}">
                            Completar
                        </button>

                        <button
                            class="btn btn-danger btn-sm delete-btn"
                            data-id="${task.id}">
                            Eliminar
                        </button>

                    </div>

                </div>

            </div>

        `).join("");

        updateCounters();
    }

    function addTask() {

        const title = taskInput.value.trim();

        if (!title) {
            alert("Debes escribir una tarea");
            return;
        }

        tasks.push({
            id: Date.now(),
            title: title,
            completed: false
        });

        taskInput.value = "";
        renderTasks();
    }

    function deleteTask(taskId) {

        const index =
            tasks.findIndex(
                task => task.id === taskId
            );

        if (index !== -1) {

            tasks.splice(index, 1);
        }

        renderTasks();
    }

    function toggleTaskStatus(taskId) {

        const task =
            tasks.find(
                task => task.id === taskId
            );

        if (task) {

            task.completed =
                !task.completed;
        }

        renderTasks();
    }

    function editTask(taskId) {

        const task =
            tasks.find(
                task => task.id === taskId
            );

        if (!task) {
            return;
        }

        const newTitle =
            prompt(
                "Editar tarea:",
                task.title
            );

        if (newTitle && newTitle.trim()) {

            task.title =
                newTitle.trim();

            renderTasks();
        }
    }

    addTaskBtn.addEventListener("click", addTask);

    taskInput.addEventListener( "keydown",
        (event) => {

            if (
                event.key === "Enter"
            ) {
                addTask();
            }

        }
    );


    taskList.addEventListener( "click",
        (event) => {

            const taskId =
                Number(
                    event.target.dataset.id
                );

            if (
                event.target.classList.contains(
                    "delete-btn"
                )
            ) {

                deleteTask(taskId);
            }

            if (
                event.target.classList.contains(
                    "complete-btn"
                )
            ) {

                toggleTaskStatus(taskId);
            }

            if (
                event.target.classList.contains(
                    "edit-btn"
                )
            ) {

                editTask(taskId);
            }

        }
    );

    renderTasks();