import { movies } from "../data/movies"
function minPrice(id) {
    const res = movies.filter((cur) => cur.id === id);
    const showtimes = res[0].showtimes;
    var min = Number.MAX_SAFE_INTEGER;
    for(const item of showtimes) {
        if(item.price < min) {
            min = item.price;
        }
    }
    return min;
}

export default minPrice;