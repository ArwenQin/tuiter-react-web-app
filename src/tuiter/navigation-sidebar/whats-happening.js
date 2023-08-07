import React, {useState} from "react";
import {createTuitThunk} from "../services/tuits-thunks";

import {useDispatch} from "react-redux";

import {AiOutlinePicture} from "react-icons/ai";
import {HiOutlineGif} from "react-icons/hi2";
import {MdFormatListBulleted} from "react-icons/md";
import {BsEmojiSmile} from "react-icons/bs";
import {TbCalendarStats} from "react-icons/tb";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {BiBold, BiItalic} from "react-icons/bi";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();

  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
      image:"data:image/png;base64,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",
      username: "NASA",
      time: "2h",
      handle: "@NASA",
      topic:"The Space",
      title: "NASA posted something about the moon",
      likes:0,
      liked:false,
      disliked:false,
      dislikes:0
    }
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");

  }
  return (
      <div className="row">
        <div className="col-auto">
          <img src="data:image/png;base64,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"
           width={60}/>
        </div>
        <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
       </textarea>
          <div>
            <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                    onClick={tuitClickHandler}>
              Tuit
            </button>
            <div className="text-primary fs-2">
              <AiOutlinePicture className="me-3"/>
              <HiOutlineGif className="me-3"/>
              <MdFormatListBulleted className="me-3"/>
              <BsEmojiSmile className="me-3"/>
              <TbCalendarStats className="me-3"/>
              <HiOutlineLocationMarker className="me-3 d-none d-xs-inline"/>
              <BiBold className="me-3 d-none d-xl-inline"/>
              <BiItalic className="me-3 d-none d-xl-inline"/>
            </div>
          </div>
        </div>
        <div className="col-12"><hr/></div>
      </div>
  );
}
export default WhatsHappening;

