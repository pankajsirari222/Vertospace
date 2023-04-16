import TypeWriter from "typewriter-effect";
import "../App.css";

const Heading = () => {
  return (
    <div className="heading">
      <TypeWriter
        options={{
          strings: ["Welcome to Vertospace..."],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default Heading;
