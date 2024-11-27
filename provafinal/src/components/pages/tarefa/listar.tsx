import React, {useEffect, useState} from 'react';
import { Tarefa } from '../../../models/Tarefa';

function TarefaListar(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/tarefas/listar')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                setTarefas(data);
            })
    }, []);
    return(
        <div>
            <h1>Lista de Tarefas</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descricao</th>
                        <th>Status</th>
                        <th>Categoria</th>
                    </tr>

                </thead>
                <tbody>
                {tarefas.map((tarefa, index) => {
                    return(<tr key={index}>
                                <td>{tarefa.titulo}</td>
                                <td>{tarefa.descricao}</td>
                                <td>{tarefa.status}</td>
                            </tr>
                            );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TarefaListar;