import "./UpdateRecords.css";

const UpdateRecords = () => {
  return (
    <div className="update-records-div">
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
      <div className="navigation-div1">
        <div className="group-div1">
          <div className="reef-div1">.reef</div>
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
        <div className="button-div">
          <div className="fetch-records-div">Connect Wallet</div>
        </div>
      </div>
      <div className="updaterecord-div">updaterecord</div>
      <div className="rectangle-div" />
      <div className="button-div1">
        <div className="fetch-records-div">fetch records</div>
      </div>
      <div className="domain-name-div">
        <div className="domain-div">domain</div>
        <div className="reef-div2">.reef</div>
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
        <div className="fetch-records-div">update records</div>
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
