import { movies } from "../../../data/movies";
import useSlide from "../hooks/useSlide";
import { useState } from "react";
import "./Slide.css"
function Slide() {
    const [index, setIndex] = useSlide();
    const cur = movies[index];
    const handleClick = (index) => {
        setIndex(index);
    }
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
                <div className="button-1">Đặt vé ngay</div>
                <div className="button-2">Xem chi tiết</div>
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