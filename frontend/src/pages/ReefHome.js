import "./ReefHome.css";

const ReefHome = () => {
  return (
    <div className="reef-home-div">
      <div className="credits-div3">
        {`by `}
        <a
          className="vimarshtweets3"
          href="https://twitter.com/vimarshtweets"
          target="_blank"
        >
          <span className="vimarshtweets-span3">@vimarshtweets</span>
        </a>
      </div>
      <div className="create-your-own-reef-domains">
        <p className="create-your-own">Create your own</p>
        <p className="reef-domains-p">.reef domains</p>
      </div>
      <div className="navigation-div3">
        <div className="group-div3">
          <div className="reef-div5">.reef</div>
        </div>
        <img className="vector-icon3" alt="" src="../vector3.svg" />
        <div className="ol-div3">
          <div className="home-div3">home</div>
          <div className="div9">/</div>
          <div className="mint-div3">mint</div>
          <div className="div10">/</div>
          <div className="view-div3">view</div>
          <div className="div11">/</div>
          <div className="update-div3">update</div>
        </div>
        <button className="button">
          <div className="connect-wallet-div3">Connect Wallet</div>
        </button>
      </div>
      <div className="mint-your-own-domain-now">mint your own domain now</div>
    </div>
  );
};

export default ReefHome;
