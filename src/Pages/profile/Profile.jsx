import "./profile.css";
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Feed from '../../Components/feed/Feed';
import Rightbar from "../../Components/Rightbar/Rightbar";

const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/3.jpeg" />
                            <img className="profileUserImg" src="assets/person/1.jpeg" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName"> Shahenda Hossam</h4>
                            <span className="profileInfoDesc" >My Bio</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
