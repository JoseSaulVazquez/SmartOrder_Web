import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./utils/Layout.jsx";

import Home from "./views/home/Home.jsx";
import App from "./views/home/app/App.jsx";
import Features from "./views/home/features/Features.jsx";
import Shop from "./views/home/buy/Shop.jsx";
import Pack from "./views/home/buy/Pack.jsx";
import About from "./views/home/about/About.jsx";
import Help from "./views/home/help/Help.jsx";
import Cart from "./views/home/cart/Cart.jsx";

import User from "./views/admin/user/User.jsx";
import Users from "./views/admin/users/Users.jsx";
import Edit_User from "./views/admin/users/Edit_User.jsx";

import Category from "./views/admin/categorys/Category.jsx";
import Categorys from "./views/admin/categorys/Categorys.jsx";
import Edit_Category from "./views/admin/categorys/Edit_Category.jsx";

import Foods from "./views/admin/foods/Foods.jsx";

import Login from "./views/user/login/Login.jsx";
import Sing_in from "./views/user/login/Sing_in.jsx";
import Profile from "./views/user/profile/Profile.jsx";

import Restaurants from "./views/user/restaurants/Restaurants.jsx";
import Menu from "./views/user/menu/Menu.jsx";
import SubMenu from "./views/user/submenu/SubMenu.jsx";
import Details from "./views/user/details/Details.jsx";
import MenuCart from "./views/user/cart/Cart.jsx";
import Order from "./views/user/order/Order.jsx";

import MenuManagement from "./views/admin/menu-management/MenuManagement.jsx";
import Restaurant from "./views/admin/Restaurants/Restaurant.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Navegacion normal */}
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/features" element={<Features />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:pack" element={<Pack />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/help" element={<Help />} />

          {/* Login y manejo de cuenta */}
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<Sing_in />} />
          <Route path="/logout" element={<Login />} />

          <Route path="/profile/:user" element={<Profile />} />
          <Route path="/edit-profile/:user" element={<Login />} />

          {/* Simulacion de pedido */}
          <Route path="/smartOrder" element={<Restaurants />} />
          <Route path="/smartOrder/menu" element={<Menu />} />
          <Route path="/smartOrder/menu/:category" element={<SubMenu />} />
          <Route path="/smartOrder/menu/:category/:food" element={<Details />} />
          <Route path="/smartOrder/:user/cart" element={<MenuCart />} />
          <Route path="/smartOrder/:user/order" element={<Order />} />

          {/* Administrador */}
          <Route path="/users/:user" element={<User />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/edit-user/:user" element={<Edit_User />} />

          <Route path="/categorys/:category" element={<Category />} />
          <Route path="/categorys" element={<Categorys />} />
          <Route path="/categorys/edit-category/:category" element={<Edit_Category />} />

          <Route path="/foods" element={<Foods />} />

          <Route path="/404" element={<Foods />} />

          <Route path="/admin/menu-management" element={<MenuManagement />} />
          <Route path="/admin/restaurants" element={<Restaurant />} />



        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>
);


import { registerSW } from 'virtual:pwa-register'
registerSW({ immediate: true })
