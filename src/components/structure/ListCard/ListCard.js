import { format } from 'date-fns/esm';
import React from 'react';
import { Link } from 'react-router-dom';
import './ListCard.scss';

const ListCard = (props) => {
  const task = props.task;
  const prazoLimite = format(new Date(task.prazo), 'dd/MM/yyyy')
  const color = task.prioridade === "Alta" ? "high" : task.prioridade === "Baixa" ? "low" : "mid";

  return (
    <Link to={`/view/${task._id}`} className="card">
      <div className="card">
        <h1 className="card-title">{task.tarefa}</h1>
        <p className="card-text">{task.status}</p>
        <span className={color}>{task.prioridade}</span>
        <span className="card-info">{prazoLimite}</span>
      </div>
    </Link>
  )
}

export default ListCard;
