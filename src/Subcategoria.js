import SubItem from "./SubItem"
function index(props) {
  var content = props.content
  return (
    <ul>
      {content.map((item,index) => {
        return (<li key={index} >
          <SubItem name={item.name} url={item.url} />
        </li>)
      })}
    </ul>
  );
}

export default index;
