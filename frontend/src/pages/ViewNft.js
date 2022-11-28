import "./ViewNft.css";

const ViewNft = () => {
  return (
    <div className="view-nft-div">
      <div className="credits-div1">
        {`by `}
        <a
          className="vimarshtweets1"
          href="https://twitter.com/vimarshtweets"
          target="_blank"
        >
          <span className="vimarshtweets-span1">@vimarshtweets</span>
        </a>
      </div>
      <div className="view-your-names">View Your Names</div>
      <div className="navigation-div1">
        <div className="group-div1">
          <div className="reef-div2">.reef</div>
        </div>
        <img className="vector-icon1" alt="" src="../vector1.svg" />
        <div className="ol-div1">
          <div className="home-div1">home</div>
          <div className="div3">/</div>
          <div className="mint-div1">mint</div>
          <div className="div4">/</div>
          <div className="view-div1">view</div>
          <div className="div5">/</div>
          <div className="update-div1">update</div>
        </div>
        <div className="button-div3">
          <div className="connect-wallet-div1">Connect Wallet</div>
        </div>
      </div>
      <div className="you-currently-do-not-own-any">
        you currently do not own any .reef domains
      </div>
    </div>
  );
};

export default ViewNft;
