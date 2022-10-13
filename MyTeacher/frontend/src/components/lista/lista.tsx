/* eslint-disable react/jsx-key */
import { Button } from "@mui/material"
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { Professor } from "../../@types/professor";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./lista.style"

interface ListaProps {
    professores: Professor[],
}

const Lista = (props: ListaProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                {props.professores.map(professor => (
                    <ItemLista key={professor.id}>
                        <Foto src={professor.foto}></Foto>
                        <Informacoes>
                            <Nome>{professor.nome}</Nome>
                            <Valor>{professor.valor_horas.toLocaleString('pt-br', { minimumFractionDigits: 2, style: 'currency', currency:'BRL' })}</Valor>
                            <Descricao>{professor.descricao}</Descricao>
                            <Button sx={{width: '70%'}}>Marcar Aula com {professor.nome}</Button>
                        </Informacoes>
                    </ItemLista>
                ))}
            </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado</ListaVazia>
            )}
        </div>
    )
}

export default Lista