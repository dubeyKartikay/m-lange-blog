import Markdown from "../../../components/Markdown/Markdown.component";
import Footer from "../../../components/Footer/Footer";
export default async function Page({ params }) {
   const res = await fetch(`https://raw.githubusercontent.com/dubeyKartikay/blog/master/${params.id}`)
    const body = await res.text();
    // console.log(body);
    return <div>
        <Markdown content = {body}></Markdown>
        <Footer/>
    </div>
}