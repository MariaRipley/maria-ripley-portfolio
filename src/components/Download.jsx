import "../styles/Btn.scss";

function Download() {
  const downloadFile = () => {
    const fileUrl = "../assets/MariaRoblesSpanishResume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "MariaRoblesSpanishResume.pdf";
    link.click();
  };
  return (
    <>
      <button onClick={downloadFile} className="btn">
        Download my CV
      </button>
    </>
  );
}

export default Download;
