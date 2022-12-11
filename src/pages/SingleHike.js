import React, { Component } from "react";
import defaultBcg from "../images/hike-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { HikeContext } from "../Context";
import StyledHero from "../components/StyledHero";
import Footer from "../components/Footer";

export default class SingleHike extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = HikeContext;

  render() {
    const { getHike } = this.context;
    const hike = getHike(this.state.slug);
    if (!hike) {
      return (
        <div className="error">
          <h3>"The website got lost in the Finnish forest."</h3>
          <Link to="/hikes" className="btn-primary">
            Back to homepage
          </Link>
        </div>
      );
    }

    const { name, description, extras, images } = hike;

    const [mainImg, ...defaultImg] = images;
    console.log(defaultImg);

    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={name}>
            <Link to="/" className="btn-primary">
              Back to homepage
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-hike">
          <div className="single-hike-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-hike-info">
            <article className="desc">
              <h3>Short Recap</h3>
              <p>{description}</p>
            </article>
          </div>
        </section>
        <section className="hike-extras">
          <h6>Main Points</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}> - {item}</li>;
            })}
          </ul>
        </section>
        <Footer />
      </>
    );
  }
}
