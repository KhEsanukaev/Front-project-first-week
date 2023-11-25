import React, { useState } from "react";
import logo from "../../img/logo.png";
import back from "../../img/back.jpg";
import styles from "../Header/header.module.css";
import { Link, NavLink } from "react-router-dom";
import Categories from "./categories";
import { useDispatch, useSelector } from "react-redux";
import { exit } from "../../features/applicationSlice";
import Search from "../Search/Index";

export const Header = () => {
  const [state, SetState] = useState(false);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.application.user.avatar);
  const num = useSelector((state) => state.application);
  const token = useSelector((state) => state.application.token);
  const user = useSelector((state) => state.application.user.login);
  const bookInBasket = useSelector((state) => state.books.bookInBasket);
  const handleClose = () => {
    dispatch(exit());
  };
  if (!token) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.upLine}>
          <div className={styles.logo}>
            <Link to={"/"}>
              <img src={logo} alt="" width={70} height={70} />
            </Link>
          </div>
          <Search />
          <div className={styles.navBar}>
            {/* <ul>
              <li>
                <Link to={"signup"}>Регистрация</Link>
              </li>
              <li>
                <a href="">Мои книги</a>
              </li>
              <li>
                <a href="">Закладки</a>
              </li>
              <li>
              <Link to={"/busket"}>Корзина <span>{bookInBasket.length}</span></Link>
              </li>
            </ul> */}
            <Link to={"/signup"} className={styles.NavLink}>
              Регистрация
            </Link>
            <Link className={styles.NavLink} to={"/#"}>
              Мои книги
            </Link>
            <Link className={styles.NavLink} to={"/#"}>
              Закладки
            </Link>
            <Link className={styles.NavLink} to={"/busket"}>
              Корзина <span>{bookInBasket.length}</span>
            </Link>
          </div>
        </div>
        <Categories />
      </div>
    );
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.upLine}>
        <div className={styles.logo}>
          <Link to={"/"}>
            <img src={logo} alt="" width={70} height={70} />
          </Link>
        </div>

        <div className="searchForma">
          <input
            placeholder="Введите название книги или автора"
            className={styles.search}
            type="text"
          />
          <button className={styles.btnNew}>Найти</button>
        </div>
        <div className={styles.navBar}>
          <ul>
            <li>
              <img
                className={styles.img_logo}
                src={`http://localhost:3040/${image}`}
                alt=""
              />
            </li>
            <li>
              <span className={styles.name}>{user}</span>
            </li>
            <li>
              <button onClick={handleClose}>Выйти</button>
            </li>
            <li>
              <a href="">Мои книги</a>
            </li>
            <li>
              <Link to={"/busket"}>Корзина</Link>
            </li>
          </ul>
        </div>
      </div>
      <Categories />
    </div>
  );
};

export default Header;
