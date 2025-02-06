import { useEffect, useRef, useState } from "react";

export default function WorkExperience({
  onAddWorkExperience,
  workExperiences,
  editingIndex,
}) {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    if (editingIndex !== null && formRef.current) {
      //scroll to work experience and focus
      formRef.current.scrollIntoView({ behavior: "smooth" });
      formRef.current.querySelector("input").focus();
      //populate work experience to edit
      const experience = workExperiences[editingIndex];
      setTasks(experience.tasks);

      document.getElementById("company").value = experience.company;
      document.getElementById("role").value = experience.role;
      document.getElementById("start-date").value = experience["start-date"];
      document.getElementById("end-date").value = experience["end-date"];
    }
  }, [editingIndex, workExperiences]);

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.tasks = tasks;
    onAddWorkExperience(data);
    e.target.reset();
    setTasks([]);
  }

  function handleAddTask() {
    if (currentTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, currentTask]);
    }
    setCurrentTask("");
  }

  function handleRemoveTask(index) {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }

  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <form
        className="work-experience-form"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input type="text" id="role" name="role" required />
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" name="start-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date" name="end-date" required />
        </div>
        <div className="form-group">
          <label htmlFor="tasks">Tasks</label>
          <div className="tasks-input">
            <input
              type="text"
              id="tasks"
              value={currentTask}
              onChange={(e) => setCurrentTask(e.target.value)}
              placeholder="Enter a task"
            />
            <button
              type="button"
              className="add-task-button"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </div>
          <ul className="tasks-list">
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button
                  type="button"
                  className="remove-task-button"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className="add-button">
          {editingIndex !== null ? "Done Editing" : "Add Experience"}
        </button>
      </form>
    </section>
  );
}
