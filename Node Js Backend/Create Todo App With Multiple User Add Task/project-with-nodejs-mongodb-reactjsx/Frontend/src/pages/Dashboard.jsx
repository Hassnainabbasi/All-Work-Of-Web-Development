// import React, { useEffect, useState } from 'react'

// export default function Dashboard() {
//   const [tasks , setTasks] = useState([])
//   const [newtask , setNewTask] = useState([])
//   const[loading, setLoading] = useState(true)


//   useEffect(()=>{
//     console.log(tasks)
//   })

// //   const handleSubmit = async(e) =>{
// //   e.preventDefault()

// //   if(!newtask.trim()) return;

// //   const newTaskObj = { task : newtask}

// //   setTasks([...tasks , newTaskObj])
// //   setNewTask('')

// //   const newUserTask = {tasks , newtask}
// //   try {
// //   let response = await fetch("http://localhost:3000/task",{
// //     method : "POST",
// //     headers: {
// //       'Content-Type': 'application/json',
// //   },
// //   body : JSON.stringify(newUserTask)
// //   })
// //   let data = await response.json() 
// //   } catch (error) {
// //     console.log(error)
// //   } 
// // }
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!newtask.trim()) return; 

//   const newTaskObj = { task: newtask };

//   setTasks([...tasks, newTaskObj]);
//   setNewTask(""); 

//   const token = localStorage.getItem("token");

//   if (!token) {
//     alert("Please login first!");
//     return;
//   }

//   const newUserTask = { task: newtask };
//  console.log("newUsertask=>",newUserTask)
//   try {
//     let response = await fetch("http://localhost:3000/task", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(newUserTask),
//     });

//     let data = await response.json();
//     if (data.error) {
//       console.log(data.msg);  
//     } else {
//       console.log("Task added successfully", data); 
//     }

//   } catch (error) {
//     console.log("Error:", error);
//   }
// };


//     return (
//         <div className="min-h-screen">
//         <div className="max-w-4xl mx-auto p-6">
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
//             <p className="text-gray-600 dark:text-gray-400 mt-2">Your personal task manager</p>
//           </div>
      
//           <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
//             <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
      
//             <ul className="space-y-4">
//   {tasks.map((task, index) => (
//     <li key={task._id || index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 transition-colors">
//       <span className="text-gray-900 dark:text-white">{task.task}</span>
  
//       <button className="ml-4 text-red-500 hover:text-red-700 transition-colors">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
//           <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1a.5.5 0 0 1 .5.5V2h-9V1a.5.5 0 0 1 .5-.5h1V0a.5.5 0 0 1 .5-.5zM2 3h12v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm3 1v9h8V4H5z"/>
//         </svg>
//       </button>
//     </li>
//   ))}
// </ul>
//           </div>
//           <form onSubmit={handleSubmit} className="mt-6 px-10">
//             <input
//              value={newtask}
//              onChange={(e) => setNewTask(e.target.value)}
//             className='border border-gray-500 rounded-lg p-2' type="text" placeholder='Write Something...'/>
//             <button
              
//               className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
//             >
//               Add New Task
//             </button>
//           </form>
//         </div>
//       </div>
      
    
//   )
// }
        
// //  useEffect(() => {
// //     const fetchData = async() =>{
// //         try {
// //             const data = await fetch('http://localhost:3000/task')
// //              const response = await data.json()
// //              if (response.error) {
// //                 setError(response.msg);
// //               } else {
// //                 setTask(response.data);
// //               setLoading(false)
// //               }
// //         } catch (error) {
// //             console.log(error)
// //             setLoading(false)
// //         }
// //      }
// //      fetchData()
// // },[])
// // if(loading){
// //     return <div>Loading...</div>
// // }
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]); 
  const [newtask, setNewTask] = useState('');  
  const [loading, setLoading] = useState(true);  

  const navigate = useNavigate()

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('Please login first!');
      navigate('/auth')
        return;
      }

      try {
        const response = await fetch("https://api-l2lowp11l-hassnains-projects-2fb55efa.vercel.app/api", {
  mode: "no-cors",
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.error) {
          console.log(data.msg);
        } else {
          setTasks(data.data);
          console.log('Tasks fetched successfully', data);
        }
      } catch (error) {
        console.log('Error fetching tasks:', error);
      }
    };

    fetchTasks(); 
  }, [navigate]);  

const logoutButton = async () => {
  localStorage.removeItem('token');
  alert('Logout Successful');
  navigate('/auth')

}

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newtask.trim()) return;

    const newTaskObj = { task: newtask };

    setTasks([...tasks, newTaskObj]);
    setNewTask('');

    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please login first!');
      return;
    }

    const newUserTask = { task: newtask };
    console.log('newUserTask:', newUserTask);

    try {
      let response = await fetch('http://localhost:3000/task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUserTask),
      });

      let data = await response.json();
      if (data.error) {
        console.log(data.msg);
      } else {

        console.log('Task added successfully', data);
        setTasks([...tasks, data.data]);  
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    // <div className="min-h-screen">
    //   <div className="max-w-4xl mx-auto p-6">
    //     <div className="text-center mb-8">
    //     <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
    //     <button onClick={logoutButton} className="text-md font-bold text-white bg-blue-600 p-2 rounded-lg">Logout</button>
    //     <p className="text-gray-600 dark:text-gray-400 mt-2">Your personal task manager</p>
    //     </div>

    //     <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
    //       <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>

    //       <ul className="space-y-4">
    //         {tasks.map((task, index) => (
    //           <li key={task._id || index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 transition-colors">
    //             <span className="text-gray-900 dark:text-white">{task.task}</span>

    //             <button className="ml-4 text-red-500 hover:text-red-700 transition-colors">
    //               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
    //                 <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1a.5.5 0 0 1 .5.5V2h-9V1a.5.5 0 0 1 .5-.5h1V0a.5.5 0 0 1 .5-.5zM2 3h12v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm3 1v9h8V4H5z"/>
    //               </svg>
    //             </button>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <form onSubmit={handleSubmit} className="mt-6 px-10">
    //       <input
    //         value={newtask}
    //         onChange={(e) => setNewTask(e.target.value)}
    //         className="border border-gray-500 rounded-lg p-2"
    //         type="text"
    //         placeholder="Write Something..."
    //       />
    //       <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
    //         Add New Task
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <button
          onClick={logoutButton}
          className="mt-4 text-md font-semibold text-white bg-blue-600 p-2 rounded-lg transition-colors hover:bg-blue-700 focus:outline-none"
        >
          Logout
        </button>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Your Personal Task Manager</p>
      </div>
  
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">To-Do List</h2>
  
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={task._id || index}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 transition-colors"
            >
              <span className="text-gray-900 dark:text-white">{task.task}</span>
  
              <button className="ml-4 text-red-500 hover:text-red-700 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 0a.5.5 0 0 1 .5.5V1h5V.5a.5.5 0 0 1 1 0V1h1a.5.5 0 0 1 .5.5V2h-9V1a.5.5 0 0 1 .5-.5h1V0a.5.5 0 0 1 .5-.5zM2 3h12v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zm3 1v9h8V4H5z" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </div>
  
      <form onSubmit={handleSubmit} className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <input
          value={newtask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border border-gray-500 rounded-lg p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
          type="text"
          placeholder="Write Something..."
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none transition-colors w-full">
          Add New Task
        </button>
      </form>
    </div>
  </div>
  
  );
}
