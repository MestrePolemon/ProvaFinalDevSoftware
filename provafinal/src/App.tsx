import React from "react";
import {BrowserRouter, Router, Routes, Link, Route} from "react-router-dom";
import TarefaCadastro from "./components/pages/tarefa/cadastrar";
import TarefaListar from "./components/pages/tarefa/listar";
import TarefaListarConcluidas from "./components/pages/tarefa/concluidas";
import TarefaListarNaoConcluidas from "./components/pages/tarefa/naoConcluidas";
//1 - Um componente SEMPRE deve começar com a primeira letra
//maiúscula
//2 - Todo componente DEVE ser uma função do JS
//3 - Todo deve retornar apenas UM elemento HTML
function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/pages/tarefa/cadastrar">Cadastro de Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/pages/tarefa/listar">Listagem de Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/pages/tarefa/concluidas">Listagem de concluidas</Link>
                        </li>
                        <li>
                            <Link to="/pages/tarefa/naoConcluidas">Listagem de não concluidas</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/pages/tarefa/cadastrar" element={<TarefaCadastro/>}/>
                    <Route path="/pages/tarefa/listar" element={<TarefaListar/>}/>
                    <Route path="/pages/tarefa/concluidas" element={<TarefaListarConcluidas/>}/>
                    <Route path="/pages/tarefa/naoConcluidas" element={<TarefaListarNaoConcluidas/>}/>
                </Routes>
            </BrowserRouter>
        </div>


    );
}
//4 - OBRIGATORIAMENTE o componente DEVE ser exportado
export default App;