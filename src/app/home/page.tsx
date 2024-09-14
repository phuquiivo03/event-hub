import DefaultLayout from "../layout/DefaultLayout";
import Post from "../components/Post";
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
        </DefaultLayout>
  );
}

export default Home;