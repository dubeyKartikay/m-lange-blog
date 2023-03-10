import styles from "../styles/app/page.module.scss";
import Subscribe from "../components/Subscribe/Subscribe";
import Image from "next/image";
import MelangeImg from "../public/melange.png"
import HighlightedBlog from "../components/HighlightedBlog/HighlightedBlog";
import NewSection from "../components/NewSection/NewSection";
export default function Page() {
  return (
    <div className={styles.page}>
      <Image src={MelangeImg} alt ="Melange"/>
      <div className={styles.subDiv} ><Subscribe/></div>
      <HighlightedBlog />
      <NewSection/>
    </div>
  );
}
