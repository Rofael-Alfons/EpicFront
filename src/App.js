import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Discover from "./Pages/Discover/Discover";
import Cart from "./Pages/Cart/Cart";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Account from "./Pages/Account/Account";
import AccountSetting from "./Components/AccountComponents/AccountSetting";
import Password from "./Components/AccountComponents/Password";
import Transactions from "./Components/AccountComponents/Transactions";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import GameDetails from "./Pages/GameDetails/GameDetails";
import WishList from "./Pages/WishList/WishList";
import Browse from "./Pages/browse/browse";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  const loggedIn = useSelector((state) => state.epic.loggedIn);
  console.log(loggedIn);
  return (
    <div className="main ">
      <Header></Header>
      {/* <Browse></Browse> */}
      {/* <GameDetails /> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/gameDetails/:id" element={<GameDetails />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<ProtectedRoutes loggedIn={loggedIn} />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/account" element={<Account />}>
            <Route path="setting" element={<AccountSetting />} />
            <Route path="password" element={<Password />} />
            <Route path="transactions" element={<Transactions />} />
          </Route>
        </Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
