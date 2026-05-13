import { movies } from "../data/movies";
const find = (cur) => {
    let res = [];
    for (const x of movies) {
        for (const y of x.genre) {
            if (y === cur) {
                res = [...res, x];
            }
        }
    }
    return res;
}

export default find;