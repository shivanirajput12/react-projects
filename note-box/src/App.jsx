import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    // console.log(task);
    // console.log(copyTask);

    // console.log(title);
    setTitle("");
    // console.log(details);
    setDetails("");
  };

  const deleteNote = (idx)=>{
    // console.log("note deleted ");
    const copyTask = [...task];
    // console.log(idx);
    // console.log(copyTask[idx]);
    copyTask.splice(idx, 1)
    setTask(copyTask);
    
  }


  
  return (
    <div className="h-screen lg:flex  bg-black text-white ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex lg:w-1/2 items-start p-10 flex-col gap-4"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(e.target.value);
          }}
          placeholder="Enter Notes Title"
          className="px-5 w-full font-medium  py-3 border-2 rounded outline-none"
        />

        <textarea
          type="text"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          placeholder="Start write details"
          className="px-5 font-medium  w-full h-40 py-2 border-2 rounded outline-none"
        />

        <button className="bg-white text-black active:bg-gray-300 px-5 py-2 font-medium  w-full rounded cursor-pointer">
          Add Notes
        </button>
      </form>
      <div className=" lg:border-l-2 lg:w-1/2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex gap-4 flex-wrap mt-5 overflow-auto h-[90%]">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="h-52 w-52 flex flex-col  justify-between items-start relative py-8 pb-4 px-4 rounded-2xl bg-cover text-black"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')",
                }}
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 break-all whitespace-normal overflow-hidden leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className="w-full bg-red-500 py-1 font-bold cursor-pointer active:scale-95 rounded text-xs text-white ">Delete Note</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
