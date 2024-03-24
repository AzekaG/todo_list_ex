import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/tasks_list/Header';
import ThemeProvider from './components/providers/themeProvider';
import Task from './components/tasks_list/task';
import TaskList from './components/tasks_list/task-list';
import TaskProvider from './components/providers/taskProvider';


function App() {
  return (
    <ThemeProvider>
      <Header />
      <TaskProvider>
        <TaskList />
        <Outlet />
      </TaskProvider>
    </ThemeProvider>

  );
}

export default App;
