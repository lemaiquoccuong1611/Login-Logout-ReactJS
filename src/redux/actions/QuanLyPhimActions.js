//Đây là file chứa các hàm action

import Axios from "axios"
import { DOMAIN } from "../../util/settings"
import { GET_DATA_FILM } from "../const/QuanLyPhimConst"



export const getDataFilmAction = () => {

    return async (dispatch) => {
        //Gọi ajax lấy data từ api về
        const result = await Axios({
            url:`${DOMAIN}/api/quanlyphim/laydanhsachphim?manhom=GP01`,
            method:'GET'
        });
        //Sau khi có data => dùng hàm middleware reduxthunk (dispatch) để đưa dữ liệu lên reducer
        dispatch({
            type:GET_DATA_FILM,
            dataFilm : result.data
        })
    }

}