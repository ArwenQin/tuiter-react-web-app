import {BsChat} from 'react-icons/bs';
import {AiOutlineRetweet,AiFillHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi';
import React, {useState} from "react";
import "./index.css";
const TuitStats = ({ tuit }) => {
  const [liked, setLiked] = useState(false);

const clickLikeHandler = () => {
  setLiked(!liked);


}
  return(

        <div className="row ">
          <div className="col-3 ">
            <a class="nav-link " href="#/tuiter/home"><BsChat size={12} />&nbsp;&nbsp;{tuit.replies}</a>
          </div>

          <div className="col-3 ">
            <a className="nav-link " href="#/tuiter/home"><AiOutlineRetweet size={12} />&nbsp;&nbsp;{tuit.retuits}</a>
          </div>

          <div className="col-3 ">
            {liked?
                (<><AiFillHeart size={12} color={"red"}  onClick={clickLikeHandler}/>&nbsp;&nbsp;{tuit.likes+1}</>):
              (<><AiFillHeart size={12} onClick={clickLikeHandler}/>&nbsp;&nbsp;{tuit.likes}</>)}



          </div>

          <div className="col-2 ">
            <a className="nav-link " href="#/tuiter/home"><FiShare size={12} />&nbsp;</a>

          </div>

        </div>

  )
}
export default TuitStats;