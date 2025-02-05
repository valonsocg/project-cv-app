export default function Skills({ onAddSkill }) {
  function handleSubmit(e) {
    e.preventDefault();

    onAddSkill(e.target["skills-summary"].value.trim());
    e.target["skills-summary"].value = "";
  }

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <form onSubmit={handleSubmit} className="skills-form">
        <div className="form-group">
          <label htmlFor="skills-summary">Skill Learned</label>
          <input type="text" id="skills-summary" name="skills-summary" />
        </div>
        <button className="save-button">Save Skill</button>
      </form>
    </section>
  );
}
