import React from 'react';
import ListLists from '../../components/structure/ListLists/ListLists';
import { Link } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa'
import './Home.scss';


const Home = () => {
    return (
        <section className="content">
            <div className="content-titlebox">
            <Link to={'/new'}>
            <span className = "content-titlebox-span">
                <FaPlusSquare className="rotate-center"/>
            </span>
            </Link>
            <h2 className="content-titlebox-title"> Tarefas </h2>
            </div>
            <div className="content-list">
                <ListLists />
            </div>
        </section>
    )
}

export default Home;