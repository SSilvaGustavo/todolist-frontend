import React, { useEffect, useState } from "react";
import "./ListView.scss";
import { Api } from "../../api/api";
import { Link } from 'react-router-dom';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { format } from 'date-fns';

const ListView = (props) => {
    const id = props.match.params.id;

    const [prazo, setPrazo] = useState("");
    const [dataCriacao, setDataCriacao] = useState("");
    const [task, setTask] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTaskById();
    }, []);


    const getTaskById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        let prazoLimite = format(new Date(data.prazo), 'dd/MM/yyyy');
        let criacao = format(new Date(data.dataCriacao), 'dd/MM/yyyy');
        setPrazo(prazoLimite);
        setDataCriacao(criacao);
        setTask(data);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const response = await Api.fetchDelete(id);
        const result = await response;
        props.history.push("/");
    };

    return (
        <section className="view">
            <div className="view-infos">
                <p className="view-infos-text"><b>Tarefa: </b>{task.tarefa} </p>
                <p className="view-infos-text"><b>Descricao: </b>{task.descricao}</p>
                <p className="view-infos-text"><b>Prioridade: </b>{task.prioridade}</p>
                <p className="view-infos-text"><b>Status: </b>{task.status}</p>
                <p className="view-infos-text"><b>Prazo: </b>{prazo}</p>
                <p className="view-infos-text"><b>Data Criação: </b>{dataCriacao}</p>
                <Link to={`/edit/${task._id}`}>
                    <button className="view-buttons-edit">Editar</button>
                </Link>
                <button className="view-buttons-delete" onClick={onOpenModal}>Deletar</button>
                <Modal open={open} onClose={onCloseModal} center>
                    <p>DESEJAR EXCLUIR O ITEM?</p>
                    <button className="view-buttons-no" onClick={handleDelete}>SIM</button>
                    <button className="view-buttons-yes" onClick={onCloseModal}>NÃO</button>
                </Modal>
            </div>
        </section>
    );
};

export default ListView;
