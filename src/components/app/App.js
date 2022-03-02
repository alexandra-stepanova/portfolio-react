import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import PopupNavigation from "../popupNavigtion/PopupNavigation";

function App() {
  const [isPopupNavigatorOpen, setIsPopupNavigatorOpen] = useState(false);

  //Open/close navigation when page's size max-width 840px
  const handleOpenPopup = () => {
    setIsPopupNavigatorOpen(true);
  };

  const closePopup = () => {
    setIsPopupNavigatorOpen(false);
  };

  useEffect(() => {
    //обработчик закрытия попапов по нажатия на ESC и overlay
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const handleCloseByOverlay = (evt) => {
      //обработчик для закртия popup по кнопке и overlay
      if (
        evt.target.classList.contains("popupNavigation_is-opened") ||
        evt.target.classList.contains("popupNavigation")
      ) {
        closePopup();
      }
    };

    document.addEventListener("click", handleCloseByOverlay);
    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("click", handleCloseByOverlay);
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
        onOpen={handleOpenPopup}
        onScroll={useScrollToTop}
      />
      <Main />
      <Footer />
      <PopupNavigation
        onClose={closePopup}
        isOpen={isPopupNavigatorOpen}
      />
    </div>
  );
}

export default App;
