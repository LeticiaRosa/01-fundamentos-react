import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";
import { Post } from "./components/Post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Letícia Rosa de Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          />
          <Post
            author="Letícia Rosa de Oliveira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          />
        </main>
      </div>
    </div>
  );
}

export default App;
