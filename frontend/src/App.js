import React from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SinginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { signout } from "./actions/userActions";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // console.log('userInfo', userInfo);

  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    //  this is a component from react-router-dom
    <Router>
      <div>
        <div className="grid-container">
          <header className="row">
            <div>
              <Link className="brand" to="/">
                Amazon
              </Link>
            </div>
            <div>
              <Link to="/cart">
                Cart
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                  </Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to='/profile'>User Profile</Link>
                    </li>
                    <li>
                      <Link to='/orderhistory'>Order History</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>
                        Sign out
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <div className="dropdown">
                  <Link to='#admin'>
                    Admin <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className='dropdown-content'>
                    <li>
                      <Link to='/dashboard'>Dashboard</Link>
                    </li>

                    <li>
                      <Link to='/productlist'>Products</Link>
                    </li>

                    <li>
                      <Link to='/orderlist'>Orders</Link>
                    </li>

                    <li>
                      <Link to='/userlist'>Users</Link>
                    </li>
                  </ul>
                </div>
              )}
              {/* <Link to="/signin">{userInfo ? userInfo.name : 'Sign In'}</Link> */}
            </div>
          </header>
          {/* //routes must be definend in the mai section  */}
          <main>
            {/* //:id contains the id of our products */}
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/Signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingAddressScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/orderhistory' component={OrderHistoryScreen} />
            <PrivateRoute path='/profile' component={ProfileScreen} />
            <Route exact path="/" component={HomeScreen} />
          </main>
          <footer className="row center footer">All right reserved</footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
