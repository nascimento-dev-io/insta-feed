import { BsFillClockFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

import formatDateTime from "../../helpers/formatDateTime";
import ButtonDotsHorizontalMenu from "../ButtonDotsHorizontalMenu";

import { Container, CardAuthor } from "./styles";

function ProfileHeader({ user, createAt }) {
  return (
    <Container>
      <CardAuthor>
        <img src={user.profile_image.small} alt="user profile" />
        <div>
          <a
            href={`https://instagram.com/${user.instagram_username}`}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{`${user.first_name} ${user.last_name || ""}`}</strong>
          </a>

          <div className="details">
            {user.location && (
              <div className="location">
                <ImLocation color="#E77F76" />
                <span>{user.location}</span>
              </div>
            )}

            {createAt && (
              <div className="times-ago">
                <BsFillClockFill color="#E77F76" />
                <span>{formatDateTime(createAt)}</span>
              </div>
            )}
          </div>
        </div>
      </CardAuthor>
      <ButtonDotsHorizontalMenu />
    </Container>
  );
}

export default ProfileHeader;
