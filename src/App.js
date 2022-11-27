import Menu1 from './Menu1';
import Menu2 from './Menu2';
import { api } from "./api";
import {useWindowSize} from "./Hook";
import "./geral.css";

function App() {
  const window = useWindowSize();
  console.log(window.width)
  return (
    <>
    {window.width>900?<Menu1/>:<Menu2 api={api} />}
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia fuga natus minus beatae veritatis totam voluptas vero? Obcaecati mollitia quaerat error eaque animi explicabo. Numquam quas error voluptatum harum optio?
    </div>
    </>
  );
}

export default App;
