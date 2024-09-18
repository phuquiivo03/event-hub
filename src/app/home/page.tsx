'use client'
import DefaultLayout from "../layout/DefaultLayout";
import Post from "../components/Post";
import SideBar from "../layout/components/SideBar";
import SuggestTag from "../components/SuggestTag";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
function Home() {
    return ( 
        <DefaultLayout flex={true}>
          <Post data={{
            id: "",
            title: "",
            poster: "",
            username: "",
            avatar: "",
          }}/>
          <Post data={{
             id: "",
             title: "",
             poster: "",
             username: "",
             avatar: "",
          }}/>

          <Post data={{
             id: "222",
             title: "",
             poster: "",
             username: "",
             avatar: "",
          }}/>

          <SideBar right={true}>
            <ScrollMenu >
              
            <SuggestTag  />
            <SuggestTag  />
            <SuggestTag  />
            <SuggestTag  /> 
            <SuggestTag  />
            <SuggestTag  />
            <SuggestTag  />
            <SuggestTag  />  
            <SuggestTag  />
            <SuggestTag  />
            <SuggestTag  />
            <SuggestTag  /> 
            <SuggestTag  /> 
            <SuggestTag  />
              </ScrollMenu> 
          </SideBar>
        </DefaultLayout>
  );
}

export default Home;