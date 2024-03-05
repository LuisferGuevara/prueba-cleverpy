import { FC } from "react";
import Frame from "../Components/Frame";
import icon from "../assets/images/icon2.png";

const Profile: FC = () => {
  return (
    <Frame>
      <section>
        <article>
          <figure>
            <img src={icon} />
          </figure>

          <main>
            <h4>Name:</h4>
            <p>user.name</p>
            <h4>ID Number:</h4>
            <p>number XX</p>
          </main>
        </article>
      </section>
    </Frame>
  );
};

export default Profile;
