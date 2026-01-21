import externalStyles from "./thirdDay.module.css";

const ThirdDay = () => {
  return (
    <div className={externalStyles.container}>
      <div className={externalStyles.hero}>
        <div className={externalStyles.innerDiv}>
          <div className={externalStyles.innerDiv__text}>
            <h1 className={externalStyles.innerDiv__heading}>
              Responsive layouts don’t have to be a struggle
            </h1>
            <p className={externalStyles.innerDiv__paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <button className={externalStyles.cta__btnStyles}>
            I want to learn
          </button>
        </div>
      </div>
      <div className={externalStyles.innerDiv}>
        <div className={externalStyles.flex__boxContainer}>
          <div className={externalStyles.flex__box}>
            <h2 className={externalStyles.flex__boxHeading}>Cheap</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quis modi ad quae nobis illum eum odit asperiores iste. Molestias
              nihil odio esse est culpa cupiditate suscipit odit aspernatur
              nostrum.
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
              velit quibusdam qui, incidunt, commodi maxime excepturi inventore
              atque voluptatem porro at modi molestiae! Exercitationem error, ab
              facilis quam corrupti possimus!
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
  );
};

export default ThirdDay;
