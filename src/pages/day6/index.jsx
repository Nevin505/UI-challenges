import externalStyles from "./day6.module.css";
// Mobile first Apporach
import { IoMenuSharp } from "react-icons/io5";
const SixthDayFinalChanllengeKp = () => {
  return (
    <div className={externalStyles.mainContainer}>
      <header>
        <nav className={externalStyles.navigationContainer}>
          <div className={externalStyles.navConatiner}>
            <IoMenuSharp />
            <img src="./logo.svg" alt="" srcset="" />
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Sign in </li>
            <li>
              <button className={externalStyles.signUpCta}>Sign Up</button>{" "}
            </li>
          </ul>
        </nav>
      </header>
      <main className={externalStyles.heroContentContainer}>
        <div className={externalStyles.container}>
          <h1 className={externalStyles.leftContainer}>
            Responsive layouts <span>don’t have to be a struggle</span>
          </h1>
          <div className={externalStyles.rightContainer}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              placeat, quasi eligendi quia facilis vitae, blanditiis ad mollitia
              dolorum sed saepe a voluptatibus officia eaque amet consequatur,
              dignissimos magni laudantium!
            </p>
            <button className={externalStyles.ctaLearnBtn}>
              I want to learn
            </button>
          </div>
        </div>
      </main>
      <section className={externalStyles.pointStyle}>
        <div
          className={
            externalStyles.container +
            " " +
            externalStyles.webApproachPolicySection
          }
        >
          {" "}
          <div className={externalStyles.websitePoints}>
            <h2>Mobile-first</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sequi laboriosam quae temporibus, hic voluptatem fugit deleniti
              ad, totam nulla, sunt similique explicabo numquam eos doloremque
              esse porro. Necessitatibus, voluptatum!
            </p>
          </div>
          <div className={externalStyles.websitePoints}>
            <h2>Efficient</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              quasi ipsam iste, dolore ex placeat fugit ratione excepturi ab ut,
              cupiditate earum vitae accusamus, facilis blanditiis veritatis
              laborum hic aut.
            </p>
          </div>
          <div className={externalStyles.websitePoints}>
            <h2>Done Right</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad odio
              nemo maiores velit iste. Non explicabo tempora perspiciatis,
              quibusdam iusto fuga at modi distinctio voluptate porro. Minus
              rerum voluptatem eligendi?
            </p>
          </div>
        </div>
      </section>
      <section className={externalStyles.container}>
        <div className={externalStyles.motivationTextContainer}>
          <h2 className={externalStyles.motivationHeading}>
            It doesn’t have to be so hard
          </h2>
          <p className={externalStyles.motivationText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
            officiis voluptatum voluptatibus aut officia doloribus fuga, cum
            veritatis error aspernatur quod laboriosam enim adipisci provident
            in. Ullam veritatis nobis ipsam. Ad iusto eligendi quia. In,
            provident eum omnis nostrum nobis unde commodi autem impedit
            perspiciatis, alias dicta aspernatur nulla ab minima voluptatem,
            blanditiis nihil. Quod nam non incidunt temporibus velit!
          </p>
          <img
            src="./day6.jpg"
            alt="Radom Scroll text"
            className={externalStyles.imageDesign}
          />
          <p className={externalStyles.motivationText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem earum temporibus sed commodi, laborum recusandae
            ducimus est porro, eaque impedit aliquam deserunt provident iusto ut
            hic, quos placeat eligendi officiis! Doloremque hic, rem aliquid
            expedita eaque quis cum dolor consequuntur esse magni sequi cumque
            eius perspiciatis necessitatibus magnam omnis error nulla, laborum
            beatae totam eos distinctio et ipsam praesentium! Molestiae!
          </p>
        </div>
        <div>
          <div className={externalStyles.breakDownSteps}>
            <h2>Break it down</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
              nesciunt. Dolores itaque fuga maxime illo, quibusdam blanditiis
              velit quam ipsum magni nemo dolor in voluptatibus nisi adipisci
              ratione? Eveniet, sed.
            </p>
          </div>
          <div className={externalStyles.breakDownSteps}>
            <h2>Work your way up</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              optio esse quos, quam labore explicabo odio repellendus magnam
              dolores sapiente deleniti cupiditate quod eligendi. Numquam cumque
              fugiat totam commodi magni?
            </p>
          </div>
          <div className={externalStyles.breakDownSteps}>
            <h2>What's Your Way Up</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              architecto corporis aliquid, autem hic natus soluta in, tempora
              quaerat eligendi minima labore eius eos cumque rem quam excepturi
              praesentium sunt!
            </p>
          </div>
        </div>
      </section>
      <section className={externalStyles.footerDesgin}>
        <div className={externalStyles.container}>
          <h2 className={externalStyles.footerCompanyTag}>
            just scratching the surface
          </h2>
          <div className={externalStyles.footerCompanyInfo}>
            <div className={externalStyles.companyInfo}>
              <h3>About our company</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deserunt iusto quam rem impedit reprehenderit aut nisi
                laboriosam nostrum similique quis velit, repellat alias aliquam
                odit eos, culpa commodi necessitatibus. Dolores.
              </p>
            </div>
            <div className={externalStyles.companyAround}>
              <h3>Getting Around</h3>
              <ul className={externalStyles.footerLinks}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={externalStyles.companyAround}>
              <h3>Other things</h3>
              <ul className={externalStyles.footerLinks}>
                <li>Lorem ipsum</li>
                <li>dolor</li>
                <li>sit amet</li>
                <li>consectetur</li>
              </ul>
            </div>
            <div className={externalStyles.companyAround}>
              <h3>And More</h3>
              <ul className={externalStyles.footerLinks}>
                <li>Lorem ipsum</li>
                <li>dolor</li>
                <li>sit amet</li>
                <li>consectetur</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SixthDayFinalChanllengeKp;
