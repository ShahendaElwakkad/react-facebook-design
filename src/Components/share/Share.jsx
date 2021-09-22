import "./share.css";
import {PermMedia, LiveTv, Mood} from "@material-ui/icons";

const Share = () => {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg"src="assets/person/1.jpeg" alt="" ></img>
                    <input placeholder="What's in your mind, Shahenda?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <LiveTv htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Live Video</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Mood htmlColor="orange" className="shareIcon"/>
                            <span className="shareOptionText">Feeling/Activity</span>
                        </div>
                    </div>
                    <button className="shareButton">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Share;
