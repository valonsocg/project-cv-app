export default function Education({ onAddNewEducation }) {
  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    onAddNewEducation(data);
    console.log(data);
    e.target.reset();
  }

  return (
    <section className="education-section">
      <h2>Education</h2>
      <form className="education-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="institution">Institution</label>
          <input type="text" id="institution" name="institution" />
        </div>
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" name="degree" />
        </div>
        <div className="form-group">
          <label htmlFor="start-date-edu">Start Date</label>
          <input type="date" id="start-date-edu" name="start-date-edu" />
        </div>
        <div className="form-group">
          <label htmlFor="end-date-edu">End Date</label>
          <input type="date" id="end-date-edu" name="end-date-edu" />
        </div>
        <div className="form-group">
          <label htmlFor="description-edu">Description</label>
          <input type="text" id="description-edu" name="description-edu" />
        </div>
        <button className="add-button">Add Education</button>
      </form>
    </section>
  );
}
