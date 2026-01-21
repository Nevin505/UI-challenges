import externalStyles from "./thirdDay.module.css";

const ThirdDay = () => {
  return (
    <div className={externalStyles.container}>
      <div className={externalStyles.hero}>
        <div className={externalStyles.innerDiv}>
          <div className={externalStyles.innerDiv__text}>
            <h1 className={externalStyles.innerDiv__heading}>Responsive layouts don’t have to be a struggle</h1>
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
    </div>
  );
};

export default ThirdDay;
