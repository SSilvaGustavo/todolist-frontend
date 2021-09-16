import React from 'react'
import './ListAdd.scss'
import { Api } from '../../api/api'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const ListAdd = (props) => {
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        console.log(evento.target.tarefa.value);
        const tarefa = evento.target.tarefa.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;

        const Task = {
            tarefa: tarefa,
            descricao: descricao,
            prioridade: prioridade,
            status: status,
            prazo: new Date(prazo),
        }


        try {
            const response = await Api.fetchPost(Task);
            const data = await response;
            props.history.push('/');
            console.log(data);
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <section className="add">
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor="Tarefa" className="add-form-group-label">Tarefa</label>
                    <input className="add-form-group-input" name="tarefa" id="tarefa" type="text" />
                </div>
                <div className="add-form-group">
                    <label htmlFor="Descricao" className="add-form-group-label">Descricao</label>
                    <textarea  row ="10" col="10" warp="soft" className="add-form-group-input" name="descricao" id="descricao" type="text" />
                </div>
                <div className="add-form-group">
                    <label htmlFor="Prioridade" className="add-form-group-label">Prioridade</label>
                    <select className="add-form-group-select" name="prioridade">
                        <option className="add-form-group-select-option" value="Baixa"></option>
                        <option className="add-form-group-select-option" value="Alta">Alta</option>
                        <option className="add-form-group-select-option" value="Média">Média</option>
                        <option className="add-form-group-select-option" value="Baixa">Baixa</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="Status" className="add-form-group-label">Status</label>
                    <select className="add-form-group-select" name="status">
                        <option className="add-form-group-select-option" value="Concluido"></option>
                        <option className="add-form-group-select-option" value="A fazer">A fazer</option>
                        <option className="add-form-group-select-option" value="Em andamento">Em andamento</option>
                        <option className="add-form-group-select-option" value="Concluido">Concluido</option>
                    </select>
                </div>
                <div className="add-form-group">
                    <label htmlFor="Prazo" className="add-form-group-label">Prazo</label>
                    <input className="add-form-group-input-date" name="prazo" id="prazo" type="date" />
                </div>
                <div className="add-form-buttons">
                    <button className="add-form-buttons-cancel" >Cancelar</button>
                    <button className="add-form-buttons-submit" type="submit">Enviar</button>
                </div>
            </form>
        </section>
    )
};

export default ListAdd;