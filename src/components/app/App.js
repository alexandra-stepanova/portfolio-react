import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import PopupNavigation from "../popupNavigtion/PopupNavigation";

function App() {
  const [isPopupNavigatorOpen, setIsPopupNavigatorOpen] = useState(false);
  const [click, setClick] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  //Open/close navigation when page's size max-width 840px
  const handleOpenPopup = () => {
    setIsPopupNavigatorOpen(true);
  };

  const closePopup = () => {
    setIsPopupNavigatorOpen(false);
  };

  useEffect(() => {
    if (!click) {
      return handleOpenPopup();
    } else {
      return closePopup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [click]);

  useEffect(() => {
    //обработчик закрытия попапов по нажатия на ESC и overlay
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, []);
  // scrolling
  function useScrollToTop() {
    scroller.scrollTo("app", {
      duration: 600,
      delay: 0,
      spy: true,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div id="app" className="app">
      <Header
        click={click}
        setClick={setClick}
        onScroll={useScrollToTop}
        isOpen={isPopupNavigatorOpen}
      />
      <Main />
      <Footer />
      <PopupNavigation isOpen={isPopupNavigatorOpen} onClose={closePopup} />
    </div>
  );
}

export default App;
