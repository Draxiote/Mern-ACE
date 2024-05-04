import { useSelector } from "react-redux";
import "../assets/css/style.css";
import profilepic from "../assets/img/blankprofile.jfif"

const TestProfile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="profile-links">
            <img src={profilepic} alt="" />
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Archives</a>
            </li>
            <li>
              <a href="#">Digital IDs</a>
            </li>
            Add custom profile privileges
            <li>
              <a href="/adminpanel">Admin Notice Panel</a>
            </li>
            <li></li>
          </div>
        </div>

        <div class="col-md-6">
          <div class="mt-custum">
            <div class="details">
              <div class="row">
                <div class="col-8">Name</div>
                <div class="col-4">{userInfo.name}</div>
              </div>
            </div>
            <div class="details">
              <div class="row">
                <div class="col-8">Email</div>
                <div class="col-4">{userInfo.email}</div>
              </div>
            </div>
          </div>

          <h3 class="mt-5">About Me</h3>
          <p class="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            assumenda doloribus, omnis molestias earum voluptatem dignissimos,
            repudiandae sit repellat velit sunt ab laboriosam aperiam quisquam,
            distinctio similique veniam voluptate totam temporibus provident!
            Laudantium consectetur, ab earum suscipit reprehenderit assumenda
            aliquam repellendus accusantium. Culpa in praesentium atque
            dignissimos officia nihil sed?
          </p>
        </div>
      </div>
    </div>
  );
};
export default TestProfile;
