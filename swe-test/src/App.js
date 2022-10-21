import "./App.css";
import Logo from "./assets/img/Logo.png";
import NotificationIcon from "./assets/img/Notification.png";
import ProfilePicture from "./assets/img/Profile.png";
import Plus from "./assets/img/Plus.png";
import { useEffect, useState, useRef } from "react";
import Right from "./assets/img/Right.png";

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  // Captrar lo que los usarios estan escribiendo en los text fields
  const [ItemSeleccionada, setItemSeleccionada] = useState({
    expense_date: "",
    description: "",
    amount: "",
    concepts: { concepts_name: "" },
    account_id: { account_name: "" },
    image: "",
  });
  useEffect(() => {
    fetch("https://634e4f19f34e1ed82687f770.mockapi.io/SWE/milestones")
      .then((response) => response.json())
      .then(setData);
  }, []);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (
    <div className="grid-container">
      <header className="header">
        <div className="header__title">Jefferson High School</div>
        <div className="header__notification">
          <img src={NotificationIcon}></img>
        </div>
        <div className="header__name">Ann Head</div>
        <div className="header__photo">
          <img src={ProfilePicture}></img>
        </div>
      </header>

      <aside className="sidenav">
        <div className="menu-icon">
          <img src={Logo} />
        </div>
        <ul className="sidenav__list">
          <li className="sidenav__list-item">Dashboard</li>
          <li className="sidenav__list-item">Milestones</li>
        </ul>
      </aside>

      <main className="main">
        <div className="main-base">
          <div className="main-base__Milestonebox">
            <div className="main-base__Milestonetext">
              {" "}
              Milestones view all{" "}
            </div>
            <div className="main-base__Carousel" ref={carousel}>
              <>
                {data.map((item) => {
                  const { date, description, name } = item;
                  return (
                    <div className="item">
                      <div className="leftPanel">
                        <div className="square">
                          <div className="month">05</div>
                          <div className="day">jul</div>
                        </div>
                      </div>
                      <div className="rightPanel">
                        <span>{description}</span>
                      </div>
                    </div>
                  );
                })}
              </>
            </div>
          </div>

          <div className="main-base__Plusicon">
            <img src={Plus}></img>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handleLeftClick}>
            {" "}
            <img src={Right} />
          </button>
          <button onClick={handleRightClick}>
            <img src={Right} />{" "}
          </button>
        </div>
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
