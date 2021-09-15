import React from "react";
import { Link } from "react-router-dom";
import "./ListCard.scss";

const ListCard = (props) => {
  const list = props.list;

  return (
    <Link to={`/view/${list._id}`} className="card">
      <div>
        <div className="card-tarefa">
          <span className="card-tarefa-info">{list.tarefa}</span>
          <span class="card-tarefa-status">{list.status}</span>
          <span class="card-tarefa-prioridade">{list.prioridade}</span>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
