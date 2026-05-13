import { useState } from "react";
import { movies } from "../../../data/movies";
import './Type.css';
import { useSelector, useDispatch } from 'react-redux';
import { click } from "../slices/typeSlice";
import find from "../../../services/moviesService";
function Type() {
    const dispatch = useDispatch();
    const [index, setIndex] = useState(-1);
    const handleClick = (idx) => {
        setIndex(idx);
    }
    const s = new Set();
    for (const item of movies) {
        for (const x of item.genre) {
            s.add(x);
        }
    }
    return (
        <div className="Type">
            <div className="title">Thể loại:</div>
            {index === -1 ? <div className="item-new">Tất cả</div> : <div className="item" onClick={() => { handleClick(-1); dispatch(click(movies)); }}>Tất cả</div>}
            {
                [...s].map((cur, idx) => {
                    return idx === index ? <div className="item-new" key={idx}>{cur}</div> : <div className="item" onClick={() => {handleClick(idx); dispatch(click(find(cur)));}} key={idx}>{cur}</div>
                })
            }
        </div>
    )
}

export default Type;