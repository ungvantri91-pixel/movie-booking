import { useSelector } from "react-redux";
import './Detail.css';
function Detail() {
    const movie = useSelector(state => state.detail.data);
    return(
        <div className="decor">{movie.title}</div>
    )
}

export default Detail;