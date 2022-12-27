import React from "react";
import "./Message.css";
import Messageimg from "./Messageimg/Messageimg";
import { MdCloudDone } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2, TbBrandTelegram } from "react-icons/tb";

export default function Message() {
  return (
    <div className="main">
      <div className="chat_top">
        <div className="profile">
          <img src={Messageimg.NASA} alt="" />
        </div>
        <div className="tag">
          <strong>NASA-Official</strong>
          <p className="name">
            @Nasa-Official
            <MdCloudDone className="icon" />
          </p>
        </div>
      </div>

      <div className="chat_bottom">
        <p className="info">
          FOLLOW FOR ME <span>#INSTAGRAM</span>
        </p>
        <div className="message">
          <input type="text" placeholder="Send Message" />

          <div className="chat_icon">
            <p>
              <AiOutlineHeart className="chaticons" />
            </p>
            <p>
              <TbMessageCircle2 className="chaticons" />
            </p>
            <p>
              <TbBrandTelegram className="chaticons" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
