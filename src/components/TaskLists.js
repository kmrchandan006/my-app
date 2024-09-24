// components/TaskLists.js
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

const TaskLists = () => {
  const [taskLists, setTaskLists] = useState([]);

  useEffect(() => {
    const fetchTaskLists = async () => {
      const taskListsCollection = collection(db, 'tasklists');
      const taskListsSnapshot = await getDocs(taskListsCollection);
      const taskListsData = taskListsSnapshot.docs.map(doc => doc.data());
      setTaskLists(taskListsData);
    };
    fetchTaskLists();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Task Lists</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th>Task List Title</th>
            <th>Created By</th>
            <th>No. of Tasks</th>
            <th>Creation Time</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {taskLists.map((list, index) => (
            <tr key={index}>
              <td>{list.title}</td>
              <td>{list.createdBy}</td>
              <td>{list.taskCount}</td>
              <td>{list.creationTime}</td>
              <td>{list.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskLists;
