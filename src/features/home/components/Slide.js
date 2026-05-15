import { movies } from "../../../data/movies";
import useSlide from "../hooks/useSlide";
import { useState } from "react";
import "./Slide.css"
import { useDispatch } from "react-redux";
import { choose } from "../../detail/slices/detailSlice";
import { useNavigate } from 'react-router-dom';
function Slide() {
    const [index, setIndex] = useSlide();
    const navigate = useNavigate();
    const handle = () => {
        navigate("/detail");
    }
    const cur = movies[index];
    const handleClick = (index) => {
        setIndex(index);
    }
    const dispatch = useDispatch();
    return (
            <div className="Slide" style={{ backgroundImage: `url(${cur.backdrop})` }}>
                <div className="status">ĐANG CHIẾU</div>
                <div className="title">{cur.title}</div>
                <div className="container-1">
                    <div className="age">{cur.age}</div>
                    <div className="duration">{cur.duration} phút</div>
                    <div className="rating">{cur.rating}/10</div>
                    <div className="genre">{cur.genre[0]}</div>
                    <div className="genre">{cur.genre[1]}</div>
                </div>
                <div className="description">{cur.description}</div>
                <div className="container-2">
                    <div className="button-1" onClick={() => {dispatch(choose(cur)); handle();}}>Đặt vé ngay</div>
                    <div className="button-2" onClick={() => {dispatch(choose(cur)); handle();}}>Xem chi tiết</div>
                </div>
                <div className="list">
                    {index === 0 ? <div className="item-decor" onClick={() => handleClick(0)}></div> : <div className="item" onClick={() => handleClick(0)}></div>}
                    {index === 1 ? <div className="item-decor" onClick={() => handleClick(1)}></div> : <div className="item" onClick={() => handleClick(1)}></div>}
                    {index === 2 ? <div className="item-decor" onClick={() => handleClick(2)}></div> : <div className="item" onClick={() => handleClick(2)}></div>}
                    {index === 3 ? <div className="item-decor" onClick={() => handleClick(3)}></div> : <div className="item" onClick={() => handleClick(3)}></div>}
                </div>
            </div>
    )
}

export default Slide;