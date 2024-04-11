import mina from "../../assets/images/mina.png";

interface Props {
  name: string;
  feedback: string;
}

const TestimonialCard = ({ name, feedback }: Props) => {
  return (
    <div className="test-card">
      <div className="test-card-img">
        <img src={mina} alt="testimonial-dude" />
      </div>
      <div className="test-card-text">
        <h3 style={{ fontSize: "1rem", letterSpacing: "2px" }}>{name}</h3>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
