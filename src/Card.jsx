export default function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <div className="img-wrap">
          <img src={props.src} alt="profile picture"></img>
        </div>
      </div>

      <div className="card-details">
        <h3>{props.name}</h3>
        <p>
          The lorem text the section contain contains header having open and
          close functionality.
        </p>
        <button>View More</button>
      </div>
    </div>
  );
}
