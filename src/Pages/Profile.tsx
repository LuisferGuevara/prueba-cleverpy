import { FC } from "react";
import Frame from "../Components/Frame";
import icon from "../assets/images/icon2.png";
import { RootState } from "../Redux/types";
import { useSelector } from "react-redux";

const Profile: FC = () => {
  const loggedUser = useSelector((state: RootState) => state.login.loggedUser);

  return (
    <Frame>
      <section className="profile">
        <article className="profile__info">
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
  );
};

export default Profile;
