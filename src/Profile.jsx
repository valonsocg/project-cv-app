export default function Profile({ profile, onProfileChange }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(profile);
  }

  function handleProfileChange(e) {
    onProfileChange(e.target.value);
  }

  return (
    <section className="profile-section">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="profile-summary">Profile Summary</label>
          <textarea
            type="text"
            id="profile-summary"
            name="profile-summary"
            onChange={handleProfileChange}
            value={profile}
          />
        </div>
      </form>
    </section>
  );
}
