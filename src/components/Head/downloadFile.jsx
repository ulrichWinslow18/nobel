import React from 'react'
import { saveAs } from "file-saver";

const DownloadFile = () => {
  
  
  const saveFile =()=>{
    saveAs("https://34.filelu.com/d/rj3oby3mjqi67jtamwm5u3fvra7m4kq7lecywk45bb6sftaacm4hbtzuhaw5gu2cua6geaux/Cv_informatique.pdf");
  };
  return (
    <>
      <button className='home-btn'onClick={saveFile}> download cv <i className='fas fa-download'></i></button>
    </>
  )
}

export default DownloadFile