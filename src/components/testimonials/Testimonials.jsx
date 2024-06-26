import "./testimonials.scss";
import tomHardy from "../../assets/118051-1537567878.jpg";
import alexK from "../../assets/alexkalinski.jpeg";
import steveJobs from "../../assets/stevejobs.jpg";
import right from "../../assets/angle-right.svg";

export default function testimonials() {
  const data = [
    {
      id: 1,
      name: "Tom Hardy",
      title: "Senior Developer",
      img: { tomHardy },
      icon: "../../assets/twitter-alt-square.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: { alexK },
      icon: "../../assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: { steveJobs },
      icon: "../../assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d, id) => (
          <div className={d.featured ? "card featured" : "card"} key={id}>
            <div className="top">
              <img src={right} className="left" alt="" />
              <img className="user" src={data.img} alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h3>{d.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
