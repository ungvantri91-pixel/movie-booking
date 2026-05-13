import { useSelector } from 'react-redux';
import { movies } from '../../../data/movies';
import minPrice from '../../../services/minPrice';
import './List.css';
function List() {
    var movieList = useSelector((state) => state.type.data);
    if (movieList === null) movieList = movies;
    return (
        <div className='List'>
            <div className='container-1'>
                <div className='title'>Phim đang chiếu</div>
                <div className='quantity'>{movieList.length} phim</div>
            </div>
            <div className='container-2'>
                {movieList.map((cur) => {
                    return (
                        <div className='item' key={cur.id}>
                            <div className='image' style={{ backgroundImage: `url(${cur.poster})` }}></div>
                            <div className='infor'>
                                <div className='title'>{cur.title}</div>
                                <div className='genre'>
                                    <div className='genre-item'>{cur.genre[0]}</div>
                                    <div className='genre-item'>{cur.genre[1]}</div>
                                </div>
                                <div className='regulation'>
                                    <div className='age'>{cur.age}</div>
                                    <div className='rating'>{cur.rating}</div>
                                </div>
                                <div className='min-price'>Từ {minPrice(cur.id).toLocaleString()}đ</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List;