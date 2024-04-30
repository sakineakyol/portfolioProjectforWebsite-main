import "./works.scss";
import mobileImage from "../../assets/mobile-button.png";
import rightArrow from "../../assets/angle-right.svg";
import globe from "../../assets/globe.png";
import branding from "../../assets/edit.png";
import homeImage from "../../assets/attachment_100040756-e1538485934255.jpg";

export default function Works() {
  const data = [
    {
      id: "1",
      icon: { mobileImage },
      title: "Web Design",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: { globe },
      title: "Mobile Application",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: { branding },
      title: "Branding",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  return (
    <div className="works">
      <img src={rightArrow} className="arrow left" alt="" />
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={mobileImage} alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Beneath the ever-expanding sky, the distant echoes of bustling
                  city streets blended with the rustling of leaves in the wind.
                  Pigeons flapped their wings, spiraling upward, while a stray
                  cat slinked through an alleyway. A café on the corner offered
                  a warm retreat, its window reflecting the soft glow of
                  streetlights. Inside, the aroma of freshly brewed coffee
                  mingled with the murmur of quiet conversation. The world
                  outside continued its chaotic dance, but here, time seemed to
                  slow, allowing for a moment of tranquil escape.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img className="homeImage" src={homeImage} alt="" />
            </div>
          </div>
        </div>
      </div>

      <img src={rightArrow} className="arrow right" alt="" />
    </div>
  );
}
