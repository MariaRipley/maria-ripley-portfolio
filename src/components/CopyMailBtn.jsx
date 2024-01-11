//React
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

//Styles
import "../styles/CopyMailBtn.scss";

function CopyMailBtn() {
  return (
    <>
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
      <Toaster />
    </>
  );
}

export default CopyMailBtn;
