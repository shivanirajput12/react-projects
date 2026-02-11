import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );
    setUserData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-200 text-4xl absolute top-1/2 left-1/2 -translatex-1/2  -translatey-1/2">Loading...........</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div className="m-4 " key={idx}>
          <Card  elem={elem}/>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto  text-white">
      <div className="flex flex-wrap gap-4 h-[82%]">{printUserData}</div>
      <div className="flex justify-center gap-4 items-center p-4 ">
        <button
        style={{opacity:index==1 ? 0.5 : 1}}
          onClick={() => {
            console.log("Previous button click");
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-300 text-black rounded px-4 cursor-pointer active:scale-95 py-2 font-semibold"
        >
          Previous
        </button>
        <h4>Page {index}</h4>
        <button
          onClick={() => {
            console.log("next button click");
            setIndex(index + 1);
            setUserData([]);
          }}
          className="bg-amber-300 text-black rounded cursor-pointer active:scale-95 px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
