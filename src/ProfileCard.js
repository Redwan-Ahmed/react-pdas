function ProfileCard({ title, handle, img, desc }) {
  //const {title, handle} = props

  return (
    <div className="card" style={{minHeight: '100%'}}>
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={img} alt="PDA Logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{desc}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
