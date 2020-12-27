import Axios from 'axios';
import { ACCESS_TOKEN, DOMAIN, USER_LOGIN } from '../../util/settings';

//nguoiDung = {taiKhoan:'',matKhau:''}
export const dangNhapAction = (nguoiDung) => {

    return async dispatch => {
        try {
            const result = await Axios({
                url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
                method: 'POST',
                data: nguoiDung
            });

            //Đăng nhập thành công
            console.log(result.data);
            //Lấy token lưu vào localstorage
            localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
            localStorage.setItem(USER_LOGIN,JSON.stringify(result.data));

        } catch (err) {
            //Đăng nhập thất bại
            console.log(err.response?.data)
        }
        // //Cách dùng promise
        // const promise = Axios({
        //     url: `${DOMAIN}/api/quanlynguoidung/dangnhap`,
        //     method: 'POST',
        //     data: nguoiDung
        // });

        // promise.then(result => {
        //     console.log(result.data)
        // }).catch(err=>{
        //     console.log(err.response?.data)
        // })
    }

}