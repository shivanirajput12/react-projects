import axios from "axios";
import { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=20",
    );
    setUserData(response.data);
    console.log(response.data);
  };

  let printUserData = "No User available";
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div className="ml-4" key={idx}>
          <a href={elem.url} target="_black">
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen overflow-auto text-white">
      <button
        onClick={getData}
        className="bg-green-500 mb-4 mt-3 ml-4 active:scale-95 cursor-pointer text-white px-5 py-2 rounded"
      >
        Get data
      </button>

      <div className="flex flex-wrap gap-4">{printUserData}</div>
    </div>
  );
};

export default App;
