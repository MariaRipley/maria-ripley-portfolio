// React
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

// Styles
import "../styles/CopyMailBtn.scss";

function CopyMailBtn() {
  const handleCopyClick = () => {
    toast.success("Text copied successfully");
  };

  return (
    <>
      <CopyToClipboard text="mariaroblesberm@gmail.com">
        <button className="info__mail" onClick={handleCopyClick}>
          Copy my Email
        </button>
      </CopyToClipboard>
      <Toaster />
    </>
  );
}

export default CopyMailBtn;
