import React from "react";
import { Link, useLocation } from "react-router-dom";
import {AiFillHome,AiOutlineBell} from "react-icons/ai";
import {BsHash,BsEnvelope,BsBookmark,BsPerson} from "react-icons/bs";
import {LiaListSolid} from "react-icons/lia";
import {CiCircleMore} from "react-icons/ci";
const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [{ icon: <AiFillHome />, text: "home" },
    { icon: <BsHash/>, text: "explore" },
    { icon: <AiOutlineBell/>, text: "notifications" },
    { icon: <BsEnvelope/>, text: "messages" },
    { icon: <BsBookmark/>, text: "bookmarks" },
    { icon: <LiaListSolid/>, text: "lists" },
    { icon: <BsPerson/>, text: "profile" },
    { icon: <CiCircleMore/>, text: "more" } ];
  return (
      <div className="list-group">
        {links.map((link) =>
            <Link to={`/tuiter/${link.text}`} className={`list-group-item text-capitalize ${active === link.text ? "active" : ""}`}>
              {link.icon} &nbsp;<span className="d-none d-xl-inline">{link.text}</span>
            </Link>
        )}
      </div>
  );
};
export default NavigationSidebar;

