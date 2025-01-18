import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TodoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);  // To keep track of the task being edited
  const [editedValue, setEditedValue] = useState('');  // The new value for the task being edited

  



  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }

  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (task) => {
    const updatedTasks = tasks.filter(t => t !== task);
    setTasks(updatedTasks);
  };

  const handleEdit = (task) => {
    setEditingTask(task); 
    setEditedValue(task);  
  };

  const handleUpdate = () => {
    if (editedValue.trim()) {
      const updatedTasks = tasks.map(task =>
        task === editingTask ? editedValue : task
      );
      setTasks(updatedTasks);
      setEditingTask(null); 
      setEditedValue('');
    }
  };

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    console.log("Tasks length:", tasks);
  }, [tasks]);
  


  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card">
                <div className="card-body p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>

                  {/* Add Task Form */}
                  <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
                    <div className="form-outline flex-fill">
                      <input
                        type="text"
                        onChange={handleInputChange}
                        value={inputValue}
                        className="form-control form-control-lg"
                      />
                      <label className="form-label">What do you need to do today?</label>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg ms-2">Add</button>
                  </form>

                  {/* Task List */}
                  <ul className="list-group mb-0">
                    {tasks.map((task, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
                      >
                        <div className="d-flex align-items-center">
                          {editingTask === task ? (
                            <div className="d-flex  NhV9ysu92XG@ANS">
                              <input
                                type="text"
                                value={editedValue}
                                onChange={(e) => setEditedValue(e.target.value)}
                                className="form-control form-control-sm"
                              />
                              <button
                                className="btn btn-success btn-sm ms-2"
                                onClick={handleUpdate}
                              >
                                Update
                              </button>
                            </div>
                          ) : (
                            task
                          )}
                        </div>
                        <div>
                          <button onClick={() => handleEdit(task)} className="bg-transparent border-0">
                            <CiEdit  />
                          </button>
                          <button onClick={() => handleDelete(task)} className="ms-2 bg-transparent border-0">
                            <MdDelete  />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoList;
