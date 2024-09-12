'use client'
import SideBar from "@/app/layout/components/SideBar";
import {
    House,
    Heart,
    Search,
    MessageCircle,
    PlusCircle,
    Bookmark,
    User,
    Menu,
  } from "lucide-react";
import SideBarButton from "../../components/SideBarButton";
import clsx from "clsx";
import styles from './DefaultLayout.module.css'
import { useContext} from "react";
import { AppContext } from "@/app/components/AppProvider";
const sideBarItemsConfig = [
    { icon: House, text: "Home", alert: 0, path: "/" },
    { icon: Search, text: "Explore", alert: 0, path: "/explore" },
    { icon: Heart, text: "Notifications", alert: 1, path: "/notifications" },
    { icon: MessageCircle, text: "Messages", alert: 102, path: "/messages" },
    { icon: PlusCircle, text: "Create", alert: 0, path: "/create" },
    { icon: Bookmark, text: "Saved", alert: 0, path: "/saved" },
    { icon: User, text: "Profile", alert: 0, path: "/profile" },
    // { icon: Menu, text: "More", alert: 0, path: "/more" },
  ];



function DefaultLayout({children}: {children: React.ReactNode}) {
  const context = useContext(AppContext);
  const {activeBtn, setActiveBtn} = context!;
  return ( <div className={clsx(styles.wrapper)}>
            <SideBar>
              {sideBarItemsConfig.map((item, index) =>
                <SideBarButton title={item.text} 
                  to={item.path}
                  active={activeBtn == index}
                  icon={<item.icon 
                  size={32} 
                  strokeWidth={activeBtn == index ? 2.5 : 1.5}
                  />}
                  click={() => {
                  setActiveBtn(index)
                }}
                />)}
            </SideBar>

        <div className={clsx(styles.content)}>
            {children}
        </div>
       
    </div> );
}

export default DefaultLayout;