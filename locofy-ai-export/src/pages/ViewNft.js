import "./ViewNft.css";

const ViewNft = () => {
  return (
    <div className="view-nft-div">
      <div className="credits-div2">
        {`by `}
        <a
          className="vimarshtweets2"
          href="https://twitter.com/vimarshtweets"
          target="_blank"
        >
          <span className="vimarshtweets-span2">@vimarshtweets</span>
        </a>
      </div>
      <div className="view-your-names">View Your Names</div>
      <div className="navigation-div2">
        <div className="group-div2">
          <div className="reef-div3">.reef</div>
        </div>
        <img className="vector-icon2" alt="" src="../vector2.svg" />
        <div className="ol-div2">
          <div className="home-div2">home</div>
          <div className="div6">/</div>
          <div className="mint-div2">mint</div>
          <div className="div7">/</div>
          <div className="view-div2">view</div>
          <div className="div8">/</div>
          <div className="update-div2">update</div>
        </div>
        <div className="button-div3">
          <div className="connect-wallet-div2">Connect Wallet</div>
        </div>
      </div>
      <div className="you-currently-do-not-own-any">
        you currently do not own any .reef domains
      </div>
    </div>
  );
};

export default ViewNft;
