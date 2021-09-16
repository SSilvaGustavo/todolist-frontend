import React from 'react';
import ListLists from '../../components/structure/ListLists/ListLists';
import './Home.scss';

const Home = () => {
    return (
        <section className="content">
            <h2 className="content-title"> Tarefas </h2>
            <div className="content-list">
                <ListLists />
            </div>
        </section>
    )
}

export default Home;