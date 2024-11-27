import React,{useState} from "react";
import {Tarefa} from '../../../models/Tarefa';

function TarefaCadastro(){

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoriaId, setCategoriaId] = useState("")
    const [status, setStatus] = useState("");

    function enviarTarefa( e: any){
        e.preventDefault();
        const tarefa : Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaID: categoriaId,
            status: status
        }
        fetch('http://localhost:5000/api/tarefas/cadastrar', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tarefa)
        })
            .then(response =>{
                return response.json()
            })
            .then(data =>{
                console.log(data)
            })
    }

    return(
        <div id="cadastrar_tarefa">
            <form onSubmit={enviarTarefa}>
                <div>
                    <label htmlFor="titulo">Titulo:</label>
                    <input type="text" id="titulo" name="titulo" required onChange={(e : any) => setTitulo(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" id="descricao" name="descricao" onChange={(e : any) => setDescricao(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="categoriaID">Id da Categoria:</label>
                    <input type="text" id="categoriaid" name="categoriaid"
                           onChange={(e: any) => setDescricao(e.target.value)}/>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default TarefaCadastro;