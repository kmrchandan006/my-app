// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Users from './components/Users';
import TaskLists from './components/TaskLists';
import Tasks from './components/Tasks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tasklists" element={<TaskLists />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
 