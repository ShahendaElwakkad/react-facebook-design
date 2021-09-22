import "./sidebar.css";
import  { VideoLibrary, WorkOutline, Event, PeopleOutline,QueryBuilder, Storefront, Group, Bookmark} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar (){
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src="assets/person/1.jpeg" alt="" className="sidebarProfileImg"></img>
                        <span className="sidebarListItemText">
                            Shahenda Hossam
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <PeopleOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Friends
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <QueryBuilder className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Memories
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Storefront className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Marketplace
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Groups
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Bookmarks
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Watch
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Jobs
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">
                            Events
                        </span>
                    </li>
                </ul>
               
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    {Users.map((u) => (
                    <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
            </div>

        </div>
    )
}
