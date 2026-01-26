import externalStyles from "./thirdDay.module.css";

const ThirdDay = () => {
  return (
    <>
      <div className={externalStyles.navOuterContainer}>
        <a className={externalStyles.logoContainer}>
          <img className="" src="/logo.svg" />
        </a>
        <nav className={externalStyles.navBar}>
          <ul className={externalStyles.navlinks__container}>
            <li className={externalStyles.rightAligin}>Home</li>
            <li className="nav_link">About</li>
            <li className="nav_link">Contact</li>
            <li className={externalStyles.rightAligin}>Sign IN</li>
            <li className={externalStyles.nav_link}>Sign up</li>
          </ul>
        </nav>
      </div>
      <div className={externalStyles.container}>
        <div className={externalStyles.hero}>
          <div className={externalStyles.heroContainer}>
            <div className={externalStyles.heroContent}>
              {" "}
              <div className={externalStyles.hero__text}>
                <h1 className={externalStyles.hero__heading}>
                  Responsive layouts don’t have to be a struggle
                </h1>
                <p className={externalStyles.hero__paragraph}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <button className={externalStyles.hero__cta}>
                  I want to learn
                </button>
              </div>
              <img
                className={externalStyles.section2}
                src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                alt="Beautiful Wooden Bridge"
              />
            </div>
          </div>
        </div>
        <main className={externalStyles.websiteInfo}>
          <div className={externalStyles.websiteInfoLeftSection}>
            <h2 className={externalStyles.websiteInfoHeader}>
              Quality designs made custom, on demand, just for you
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis itaque magnam unde nostrum minus delectus ea suscipit
              quis debitis ratione dolorem incidunt odio nulla obcaecati,
              quisquam recusandae fugit et rem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              natus numquam ullam labore possimus! Fuga maiores dolor
              dignissimos odio reprehenderit laudantium, minus, exercitationem
              rem vitae corrupti, ex ad est harum?
            </p>
          </div>
          <div className={externalStyles.websiteInfoRightSection}>
            <div className={externalStyles.websiteInfoRightChildSection}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam placeat, modi explicabo quasi molestias delectus, itaque
                non ducimus inventore corporis eos? Et rerum, repellendus
                reprehenderit placeat debitis asperiores libero facilis.
              </p>
            </div>
            <div className={externalStyles.websiteInfoRightChildSection}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam placeat, modi explicabo quasi molestias delectus, itaque
                non ducimus inventore corporis eos? Et rerum, repellendus
                reprehenderit placeat debitis asperiores libero facilis.
              </p>
            </div>
            <div className={externalStyles.websiteInfoRightChildSection}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam placeat, modi explicabo quasi molestias delectus, itaque
                non ducimus inventore corporis eos? Et rerum, repellendus
                reprehenderit placeat debitis asperiores libero facilis.
              </p>
            </div>
          </div>
        </main>
        <div className={externalStyles.heroContainer}>
          <div className={externalStyles.flex__boxContainer}>
            <div className={externalStyles.flex__box}>
              <h2 className={externalStyles.flex__boxHeading}>Cheap</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam quis modi ad quae nobis illum eum odit asperiores iste.
                Molestias nihil odio esse est culpa cupiditate suscipit odit
                aspernatur nostrum.
              </p>
            </div>
            <div className={externalStyles.flex__box}>
              <h2 className={externalStyles.flex__boxHeading}>Quick</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, ipsa reiciendis praesentium ex dignissimos vel quasi
                tenetur a dolores nisi vitae corrupti quia incidunt autem nihil
                provident natus, nam sunt.
              </p>
            </div>
            <div className={externalStyles.flex__box}>
              <h2 className={externalStyles.flex__boxHeading}>Quality</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                velit quibusdam qui, incidunt, commodi maxime excepturi
                inventore atque voluptatem porro at modi molestiae!
                Exercitationem error, ab facilis quam corrupti possimus!
              </p>
            </div>
          </div>
        </div>
        <div className={externalStyles.footeraContainer}>
          <div className={externalStyles.footer_flexBoxes}>
            <div className={externalStyles.footer_box}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus nesciunt repellat nihil amet dolorem omnis, obcaecati
                veniam excepturi, illo at quo deserunt itaque maiores porro
                voluptatum, aliquid blanditiis culpa consectetur?
              </p>
            </div>
            <div className={externalStyles.footer_box}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
                architecto dignissimos eaque, impedit est facilis assumenda
                consectetur laudantium eos necessitatibus maiores blanditiis quo
                sunt ea. Similique cum commodi quas harum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdDay;
