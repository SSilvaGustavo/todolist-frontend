import React, { useState, useEffect } from "react";
import { Api } from "../../api/api";
import { Link } from "react-router-dom";
import './ListEdit.scss'

const ListEdit = (props) => {
  const id = props.match.params.id;
  const [fields, setFields] = useState({});

  useEffect(() => {
    getTaskById();
  }, []);

  const getTaskById = async () => {
    const response = await Api.fetchGetById(id);
    const data = await response.json();
    setFields(data);
    console.log(data);
  };

  const handleFieldsChange = (event) => {
    const auxFields = { ...fields };
    auxFields[event.target.name] = event.target.value;
    setFields(auxFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { ...fields };
    data.prazo = new Date(data.prazo);
    const result = await Api.fetchPut(data, id);
    const response = await result.json();
    props.history.push('/')
  };
  return (
    <section className="edit">
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="edit-form-group">
          <label htmlFor="Tarefa" className="edit-form-group-label">
            Tarefa
          </label>
          <input
            className="edit-form-group-input"
            name="tarefa"
            value={fields.tarefa}
            onChange={handleFieldsChange}
            id="tarefa"
            type="text"
          />
        </div>
        <div className="edit-form-group">
          <label htmlFor="Descricao" className="edit-form-group-label">
            Descricao
          </label>
          <input
            className="edit-form-group-input"
            name="descricao"
            value={fields.descricao}
            onChange={handleFieldsChange}
            id="descricao"
            type="text"
          />
        </div>
        <div className="edit-form-group">
          <label htmlFor="Prioridade" className="edit-form-group-label">
            Prioridade
          </label>
          <select className="edit-form-group-select" name="prioridade" value={fields.prioridade} onChange={handleFieldsChange} id="prioridade">
            <option className="edit-form-group-option" value="Baixa"></option>
            <option className="edit-form-group-option" value="Alta">Alta</option>
            <option className="edit-form-group-option" value="Média">Média</option>
            <option className="edit-form-group-option" value="Baixa">Baixa</option>
        </select>
        </div>
        <div className="edit-form-group">
          <label htmlFor="Status" className="edit-form-group-label">
            Status
          </label>
          <input
            className="edit-form-group-input"
            name="status"
            value={fields.status}
            onChange={handleFieldsChange}
            id="status"
            type="text"
          />
        </div>
        <div className="edit-form-group">
          <label htmlFor="Prazo" className="edit-form-group-label">
            Prazo
          </label>
          <input
            className="edit-form-group-input"
            name="prazo"
            value={fields.prazo}
            onChange={handleFieldsChange}
            id="prazo"
            type="date"
          />
        </div>
        <div className="edit-form-buttons">
            <Link to= {'/'}>
          <button className="edit-form-buttons-btn-cancel">Cancelar</button>
          </Link>
          <button className="edit-form-buttons-btn-submit" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ListEdit;