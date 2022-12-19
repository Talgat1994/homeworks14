import React, { useState } from "react";
import { MenuStyle } from "../style/Style";
import { BiMenuAltRight } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import MenuModal from "../menu_modal/MenuModal";

const Menu = () => {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const openMenuModalHandler = () => {
    setOpenMenuModal((prevState) => !prevState);
  };

  const closeMenuModalHandler = () => {
    setOpenMenuModal((prevState) => !prevState);
  };

  return (
    <MenuStyle>
      {openMenuModal && <MenuModal />}

      <div>
        {openMenuModal ? (
          <>
            <button onClick={openMenuModalHandler}>
              <GrClose />
            </button>
          </>
        ) : (
          <button onClick={closeMenuModalHandler}>
            <BiMenuAltRight />
          </button>
        )}
      </div>
    </MenuStyle>
  );
};

export default Menu;
