// components/Tasks.js
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksCollection = collection(db, 'tasks');
      const tasksSnapshot = await getDocs(tasksCollection);
      const tasksData = tasksSnapshot.docs.map(doc => doc.data());
      setTasks(tasksData);
    };
    fetchTasks();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Tasks</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task List Title</th>
            <th>Created By</th>
            <th>Creation Time</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.taskListTitle}</td>
              <td>{task.createdBy}</td>
              <td>{task.creationTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
