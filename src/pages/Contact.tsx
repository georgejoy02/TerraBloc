import React from 'react'
import Webcam from "../components/WebcamImage";
import { Appbar } from '../components/Appbar';

export const Contact = () => {
  return (
    <div>
      <Appbar title='Contact'/>
      <div>
        <Webcam/>
      </div>
    </div>
  );
};