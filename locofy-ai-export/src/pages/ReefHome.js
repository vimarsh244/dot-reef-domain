import "./ReefHome.css";

const ReefHome = () => {
  return (
    <div className="reef-home-div">
      <div className="credits-div">
        {`by `}
        <a
          className="vimarshtweets"
          href="https://twitter.com/vimarshtweets"
          target="_blank"
        >
          <span className="vimarshtweets-span">@vimarshtweets</span>
        </a>
      </div>
      <div className="create-your-own-reef-domains">
        <p className="create-your-own">Create your own</p>
        <p className="reef-domains-p">.reef domains</p>
      </div>
      <div className="navigation-div">
        <div className="group-div">
          <div className="reef-div">.reef</div>
        </div>
        <img className="vector-icon" alt="" src="../vector.svg" />
        <div className="ol-div">
          <div className="home-div">home</div>
          <div className="div">/</div>
          <div className="mint-div">mint</div>
          <div className="div1">/</div>
          <div className="view-div">view</div>
          <div className="div2">/</div>
          <div className="update-div">update</div>
        </div>
        <button className="button">
          <div className="connect-wallet-div">Connect Wallet</div>
        </button>
      </div>
      <div className="mint-your-own-domain-now">mint your own domain now</div>
    </div>
  );
};

export default ReefHome;
