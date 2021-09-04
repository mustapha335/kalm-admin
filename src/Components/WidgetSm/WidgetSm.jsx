import React from "react";
import "./widgetSm.scss";
import Avatar from "./avatar-img.jpeg";
import Visibility from "@material-ui/icons/VisibilityOutlined";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle"> New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={Avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Krystal Jones</span>
            <span className="widgetSmTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={Avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Krystal Jones</span>
            <span className="widgetSmTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={Avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Krystal Jones</span>
            <span className="widgetSmTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={Avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Krystal Jones</span>
            <span className="widgetSmTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img src={Avatar} alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Krystal Jones</span>
            <span className="widgetSmTitle">Artist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
