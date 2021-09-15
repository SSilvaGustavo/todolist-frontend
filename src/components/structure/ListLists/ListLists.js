import React, { useEffect, useState } from "react";
import ListCard from "../ListCard/ListCard";
import "./ListLists.scss";
import { Api } from "../../../api/api";

const List = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTask();
  }, []);

  const getTask = async () => {
    const response = await Api.fetchGet();
    const data = await response.json();

    setTasks(data);
  };

  return (
    <div className="list">
      {tasks.map((task, index) => (
        <ListCard task={task} key={index} />
      ))}
    </div>
  );
};

export default List;
