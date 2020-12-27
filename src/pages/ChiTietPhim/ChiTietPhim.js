import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import moment from 'moment';


export default function ChiTietPhim(props) {
    // tạo 1 state chứa thông tin chi tiết phim giá trị ban đầu là object rổng 
    const [chiTietPhim, setChiTietPhim] = useState({});

    //  dùng useEffect để tự động gọi api khi trang chi tiết phim load ra 
    useEffect(async () => {
        //props.match.params.:props này là props của thẻ Route truyền cho component
        //B1: Lấy mã phim từ url 
        const maPhim = props.match.params.maPhim;
        // B2: Dựa vào mã gửi lên api backend lấy dữ liệu phim về và gán vào state ChiTietPhim 
        const result = await Axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: 'GET'

        });
        console.log('data', result);
        setChiTietPhim(result.data);
        document.title = result.data.tenPhim;

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.hinhAnh} />
                </div>
                <div className="col-6">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Tên Phim</td>
                                <td>{chiTietPhim.tenPhim}</td>
                            </tr>
                            <tr>
                                <td>Mô tả</td>
                                <td>{chiTietPhim.moTa}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12">
                    <h3>Thông tin lịch chiếu</h3>

                </div>
                <div className="row">

                    <div className="nav nav-pills flex-column col-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {


                            const activeClass = index === 0 ? 'active' : '';


                            return <a key={index} className={`navlink ${activeClass}`} id={`v-pills-${heThongRap.maHeThongRap}-tab`} data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls={`v-pills-${heThongRap.maHeThongRap}`}
                                aria-selected="true">
                                {heThongRap.tenHeThongRap}
                            </a>


                        })}

                        {/* <a href={`${heThongRap.maHeThongRap}`} className="nav-link active" id={`v-pills-${heThongRap.maHeThongRap}`}>
                                        {heThongRap.tenHeThongRap}
                                        </a> */}
                        {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a> */}
                    </div>
                    <div className="tab-content col-8" id="v-pills-tabContent">
                        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {

                            const activeClass = index === 0 ? 'active' : '';

                            return <div className={`tab-pane 
                            ${activeClass}`} id={`${heThongRap.maHeThongRap}`} role="tabpanel" aria-labelledby={`v-pills-${heThongRap.maHeThongRap}-tab`} key={index}>

                                {heThongRap.tenHeThongRap}

                                {heThongRap.cumRapChieu?.map((cumRap,index)=> {
                                    return <div key={index}>
                                        <h3 className="text-success">{cumRap.tenCumRap}</h3>
                                        <div className="row">
                                            {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index)=>{
                                                return <div className="col-3" key={index}>
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm:A')}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                })}

                            </div>
                        })}

                    </div>
                    {/* <div className="tab-content col-8" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                            </div> */}



                </div>

            </div>
        </div>
    )
}
