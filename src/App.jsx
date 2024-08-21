import Card from "./Card.jsx";
import profilePicture from "./assets/person-1.jpg";
import profilePicture2 from "./assets/person-2.jpg";
import profilePicture3 from "./assets/person-3.jpg";

function App() {
  return (
    <>
      <div className="card-flex">
        <Card name="David Dell" src={profilePicture} />

        <Card name="Rose Bush" src={profilePicture2} />

        <Card name="Jones Gail" src={profilePicture3} />
      </div>
    </>
  );
}

export default App;
