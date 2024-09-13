import DefaultLayout from "../layout/DefaultLayout";
import Post from "../components/Post";
function Home() {
    return ( 
        <DefaultLayout>
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
             id: "",
             title: "",
             poster: "",
             username: "",
             avatar: "",
          }}/>
        </DefaultLayout>
  );
}

export default Home;