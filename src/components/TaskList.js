import React, { useEffect } from "react";
import TaskFilter from "./TaskFilter";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { db, doc, getDoc, setDoc } from "../firebase";

function TaskList() {
  const location = useLocation();
  const user = JSON.parse(location?.state?.user);
  console.log('user', user)

  // create priorites collection
  const createPriorities = async () => {
    const priorityRef = doc(db, "priorities", user.uid)
    const priorityDoc = await getDoc(priorityRef);

    if(!priorityDoc.exists()){
      await setDoc(priorityRef, {
        priorityUid: priorityRef.id,
        name: ['low', 'medium', 'high'],
        created_at: new Date(),
        userId: user.uid
      })
    }
  }

  // create categories collection
  const createCategories = async () => {
    const categoryRef = doc(db, 'categories', user.uid);
    const categoryDoc = await getDoc(categoryRef);

    if(!categoryDoc.exists()) {
      await setDoc(categoryRef, {
        categoryUid: categoryRef.id,
        name: ["work", "personal"],
        userId: user.uid,
        created_at: new Date(),
      })
    }
  }

  useEffect(() => {
    createPriorities();
    createCategories();
  }, [user])
  


  return (
    <div>
      <Navbar />
      <div className="container">
        <TaskFilter />
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">Your Tasks</h2>
            <ul className="list-group">
              {/* Sample Task Item */}
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <span>Task Title</span>
                <div>
                  <button className="btn btn-sm btn-warning me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </div>
              </li>
              {/* Repeat above block for more tasks */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
