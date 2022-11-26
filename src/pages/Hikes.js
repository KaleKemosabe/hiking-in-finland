import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { HikeContext } from "../Context";
import Loading from "../components/Loading";
import Hike from "../components/Hike";
import Title from "../components/Title";

// const Hikes = () => {
//   return (
//     <>
//       <Hero hero="hikesHero">
//         <Banner title="Hiking Stories">
//           <Link to="/" className="btn-primary">
//             Back to homepage
//           </Link>
//         </Banner>
//       </Hero>
//       <Footer />
//     </>
//   );
// };

// export default Hikes;

export default class FeaturedHikes extends Component {
  static contextType = HikeContext;
  render() {
    let { loading, featuredHikes: hikes } = this.context;
    hikes = hikes.map((hike) => {
      return <Hike key={hike.id} hike={hike} />;
    });

    return (
      <>
        <Hero hero="hikesHero">
          <Banner title="Hiking Stories">
            <Link to="/" className="btn-primary">
              Back to homepage
            </Link>
          </Banner>
        </Hero>
        <section className="featured-hikes">
          <Title title="Hiking Stories" />
          <div className="featured-hikes-center">
            {loading ? <Loading /> : hikes}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
