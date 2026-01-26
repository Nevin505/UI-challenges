import externalStyles from "./FifthDay.module.css";
const FifthDay = () => {
  return (
    <div className={externalStyles.fullWidthContainer}>
      <div className={externalStyles.beigue}>
        {" "}
        <div className={externalStyles.container}>
          <div className={externalStyles.main}>
            <div className={externalStyles.mainContent}>
              {" "}
              <p>lorem sipum sit</p>
              <h1>Responsive Layout Don't have to be a Struggle</h1>
            </div>
          </div>
        </div>
      </div>
      <div className={externalStyles.qualityInfoContainer}>
        <h2>Quality Designs</h2>
        <div className={externalStyles.qualityPointsContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            accusamus aliquid adipisci nobis a alias necessitatibus, animi
            autem. Reiciendis quasi nam perferendis, deleniti quisquam dolorum
            ut. Dolores laborum iste voluptate. Et alias temporibus ipsa nihil
            facilis. Aliquam esse, asperiores officia voluptatum earum magni
            amet fugiat sapiente culpa ducimus rerum exercitationem! Odit,
            praesentium. Sapiente dolore temporibus velit qui esse aspernatur
            natus?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
            accusamus aliquid adipisci nobis a alias necessitatibus, animi
            autem. Reiciendis quasi nam perferendis, deleniti quisquam dolorum
            ut. Dolores laborum iste voluptate. Et alias temporibus ipsa nihil
            facilis. Aliquam esse, asperiores officia voluptatum earum magni
            amet fugiat sapiente culpa ducimus rerum exercitationem! Odit,
            praesentium. Sapiente dolore temporibus velit qui esse aspernatur
            natus?
          </p>
        </div>
      </div>
      <div className={externalStyles.desginsLayout}>
        <div className={externalStyles.desginsLayoutContainer}>
          <div className={externalStyles.deisgin1Box}>
            <h2>Made Custom for you</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dolorem itaque corporis reiciendis sapiente nobis neque voluptates
              quisquam dolor quos id, ipsam earum inventore expedita cum ut,
              recusandae vitae nesciunt.
            </p>
          </div>
          <div className={externalStyles.deisgin1Image}>
            <img src="/day5.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className={externalStyles.desginsLayout+" "+externalStyles.colorChange}>
        <div className={externalStyles.desginsLayoutContainer}>
          <div className={externalStyles.deisgin1Image}>
            <img src="/day5image2.jpg" alt="" />
          </div>
          <div className={externalStyles.deisgin1Box}>
            <h2>Created With Care</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              dolorem itaque corporis reiciendis sapiente nobis neque voluptates
              quisquam dolor quos id, ipsam earum inventore expedita cum ut,
              recusandae vitae nesciunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthDay;
