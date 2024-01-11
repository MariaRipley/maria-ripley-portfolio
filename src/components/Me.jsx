//React
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

//Styles
import "../styles/Me.scss";

function Me() {
  const [copiedText, setCopiedText] = useState(false);

  return (
    <div className="me">
      <div className="me__pic-container">
        <img
          className="me__pic-img"
          src="/images/pic.jpg"
          alt="Redhead with face into plants"
        />
        <p className="me__pic-credits">@frankflores pic</p>
      </div>
      <div className="me__info">
        <h1 className="info__title">María Robles</h1>
        <p className="info__job">Frontend Developer</p>
        <CopyToClipboard text="roblesb.maria@gmail.com">
          <>
            <button
              className="info__mail"
              onClick={() => toast("Text copied successfully")}
            >
              Copy my Email
            </button>
          </>
        </CopyToClipboard>
      </div>
      <Toaster />
    </div>
  );
}

export default Me;
