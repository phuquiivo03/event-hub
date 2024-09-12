import DefaultLayout from "../layout/DefaultLayout";
import Post from "../components/Post";
function Home() {
    return ( 
        <DefaultLayout>
          <Post />
          <Post />
          <Post />
        </DefaultLayout>
  );
}

export default Home;