import './Profile.css'

function Profile() {
  return (
    <>
      <div className="profile">

        <img className="profile__picture" src="/images/avatars/user1.png" alt="Profile picture" />
        <div className="profile__details">
          <div className="profile__name">David Peters</div>
          <div className="profile__position">Senior Developer</div>
        </div>
      </div>
    </>
  )
}

export default Profile;