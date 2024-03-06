import { FC, useState } from "react";
import Frame from "../Components/Frame";
import icon from "../assets/images/icon2.png";
import { RootState } from "../Redux/types";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import AsideBar from "../Components/AsideBar";

const Profile: FC = () => {
  const loggedUser = useSelector((state: RootState) => state.login.loggedUser);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  return (
    <>
      <Frame center>
        <section className="profile--wrapper">
          <article className="profile ">
            <figure className="profile__image">
              <img src={icon} alt="Profile Icon" className="profile__icon" />
            </figure>
            <main className="profile__details">
              <h4 className="profile__title">Name:</h4>
              <p className="profile__username">{loggedUser?.username}</p>
              <h4 className="profile__title">ID Number:</h4>
              <p className="profile__id">{loggedUser?.id}</p>
            </main>
          </article>
        </section>
      </Frame>
      <Navbar showSearch={showSearch} setShowSearch={setShowSearch} />
      <AsideBar showSearch={showSearch} setShowSearch={setShowSearch} />
    </>
  );
};

export default Profile;
