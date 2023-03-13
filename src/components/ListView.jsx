import List from './List';
const ListView = ({ products }) => {
  return (
    <div className="list-div">
      {products.map((curElem, id) => (
        <List key={curElem.id} {...curElem} />
      ))}
    </div>
  );
};

export default ListView;
