import "./UpdateRecords.css";

const UpdateRecords = () => {
  return (
    <div className="update-records-div">
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
        <div className="button-div">
          <div className="connect-wallet-div">Connect Wallet</div>
        </div>
      </div>
      <div className="updaterecord-div">updaterecord</div>
      <div className="rectangle-div" />
      <div className="button-div1">
        <div className="connect-wallet-div">fetch records</div>
      </div>
      <div className="domain-name-div">
        <div className="domain-div">domain</div>
        <div className="reef-div1">.reef</div>
        <div className="rectangle-div1" />
      </div>
      <div className="domain-name-div1">
        <div className="current-record-description">
          current record - description
        </div>
      </div>
      <div className="domain-name-div2">
        <div className="current-record-description">current record - ipfs</div>
      </div>
      <div className="button-div2">
        <div className="connect-wallet-div">update records</div>
      </div>
      <div className="domain-name-div3">
        <div className="current-record-description">
          new record - description
        </div>
      </div>
      <div className="domain-name-div4">
        <div className="current-record-description">new record - ipfs</div>
      </div>
    </div>
  );
};

export default UpdateRecords;
