export default function PersonalInformation({
  personalInfo,
  onPersonalInfoChange,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(personalInfo);
  }

  function handleInputChange(identifier, event) {
    onPersonalInfoChange(identifier, event.target.value);
  }

  return (
    <section className="personal-info">
      <h1 className="web-title">Resume Builder</h1>
      <h2>Personal Information</h2>
      <form className="personal-info-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profile-picture">Profile Picture</label>
          <input type="image" id="profile-picture" name="profile-picture" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => handleInputChange("name", e)}
            value={personalInfo.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="job-description">Job Description</label>
          <input
            type="text"
            id="job-description"
            name="job-description"
            onChange={(e) => handleInputChange("job", e)}
            value={personalInfo.job}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleInputChange("email", e)}
            value={personalInfo.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={(e) => handleInputChange("location", e)}
            value={personalInfo.location}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={(e) => handleInputChange("phone", e)}
            value={personalInfo.phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">LinkedIn</label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            onChange={(e) => handleInputChange("linkedIn", e)}
            value={personalInfo.linkedIn}
          />
        </div>
      </form>
    </section>
  );
}
