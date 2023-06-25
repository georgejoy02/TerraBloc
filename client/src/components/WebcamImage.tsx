import { Button } from "@mui/material";
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";


interface props {
  setImg: Dispatch<SetStateAction<string | null>>,
  img: string | null
}

const WebcamImage: React.FC<props> = ({ setImg, img }) => {

  // const [img, setImg] = useState<string | null>(null);
  const webcamRef = useRef<Webcam>(null);

  const videoConstraints = {
    width: 1080,
    height: 1920,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setImg(imageSrc ?? null);
    console.log(imageSrc)
  }, [webcamRef]);

  const retake = useCallback(() => {
    setImg(null);
  }, []);

  return (
    <div className="Container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ position: "relative" }}>
        <Webcam
          audio={false}
          mirrored={true}
          height={300}
          width={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        {img !== null && (
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <img src={img} alt="screenshot" />
          </div>
        )}
        <div style={{ position: "absolute", bottom: "10px", left: "50%", transform: "translateX(-50%)" }}>
          {img === null ? (
            <Button variant="contained" onClick={capture}>Capture photo</Button>
          ) : (
            <Button variant="contained" onClick={retake}>Retake</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WebcamImage;
