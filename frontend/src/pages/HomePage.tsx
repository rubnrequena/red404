import NavBar from "../components/NavBar";
import Post from "../components/UI/post";

function HomePage() {
  return (
    <div className="w-full h-screen flex bg-base">
      <NavBar />
      <main className="w-full h-screen flex pl-20 py-4">
        <Post PostID="t2sld21sl" />
      </main>
    </div>
  );
}
export default HomePage;
