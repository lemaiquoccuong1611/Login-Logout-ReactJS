import React, { useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux';
import Axios from 'axios'
import { getDataFilmAction } from '../../redux/actions/QuanLyPhimActions';
import { NavLink } from 'react-router-dom';
export default function TrangChu(props) {
    //useSelector là hook reactredux cung cấp dùng để lấy state từ store về
    const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim);
    //useDispatch là hook thay thế cho props.dispatch khi dùng redux connect
    const dispatch = useDispatch();
    console.log('mangPhim', mangPhim);
    const loadDataPhim = async () => {
        dispatch(getDataFilmAction())
    }

    //useEffect Thay thế cho các lifecycle (didMount,didUpdate,willUnmount)
    useEffect(() => {
        //Chạy 1 lần duy nhất sau khi giao diện render (ứng với componentDidMount)
        dispatch(getDataFilmAction()); //Vừa vào trang sẽ load danh sách phim
    }, []);
    const renderFilm = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img className="card-img-top" src={phim.hinhAnh} alt={phim.hinhAnh} />
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <p className="card-text">{phim.moTa}</p>
                        <NavLink to={`/chitietphim/${phim.maPhim}`} className="btn btn-danger">
                            Mua vé
                        </NavLink>
                    </div>
                </div>
            </div>
        })
    };
    return (
        <div className="container">
            <button onClick={() => {
                loadDataPhim();
            }}>Load danh sách phim</button>
            Trang chủ
            <div className="row">
                {renderFilm()}
            </div>
        </div>
    )
}
// //Kết nối đến reducer lấy dữ liệu mảng phim về => props.mangPhim
// const mapStateToProps = (state) => {
//     return {
//         mangPhim:state.QuanLyPhimReducer.mangPhim
//     }
// }

// export default connect(mapStateToProps)(TrangChu)