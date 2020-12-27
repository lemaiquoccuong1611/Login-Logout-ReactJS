
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ChiTietPhim from './pages/ChiTietPhim/ChiTietPhim';
import DangKy from './pages/DangKy/DangKy';
import DangNhap from './pages/DangNhap/DangNhap';
import TrangChu from './pages/TrangChu/TrangChu';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/trangchu" component={TrangChu} />
        <Route exact path="/dangky" component={DangKy} />
        <Route exact path="/dangnhap" component={DangNhap} />
        <Route exact path="/chitietphim/:maPhim" component={ChiTietPhim} />
        <Route exact path="/" component={TrangChu} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
