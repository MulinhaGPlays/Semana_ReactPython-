import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";

export function useIndex() {
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor| null>(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        fetch("http://localhost:8000/professores/", {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setListaProfessores(data)
        })
    }, [])

    useEffect(() => {
        limparFormulario()
    }, [professorSelecionado])

    function marcarAula(){
        if (professorSelecionado != null){
            if (validarDadosAula()){
                fetch("http://localhost:8000/professores/"+ professorSelecionado.id +'/aulas', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({name: nome, email: email})
                }).then(()=> {
                    setProfessorSelecionado(null)
                    setMensagem('cadastrado com sucesso')
                }).catch((error) => {
                    setMensagem(error.response?.data.message)
                });
            } else {
                setMensagem('preencha os dados corretamente')
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0;
    }

    function limparFormulario(){
        setNome('')
        setEmail('')
    }


    return {
        listaProfessores,
        nome, setNome,
        email, setEmail,
        professorSelecionado, setProfessorSelecionado,
        marcarAula,
        mensagem, setMensagem,
    }
}