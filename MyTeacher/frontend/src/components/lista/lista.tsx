import { Button } from "@mui/material"
import { Professor } from "../../@types/professor";
import { FormatadorService } from "../../services/FormatadorService";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./lista.style"

interface ListaProps {
    professores: Professor[],
    onSelect: (professor: Professor) => void
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
                            <Nome>{professor.name}</Nome>
                            <Valor>{FormatadorService.valorMonetario(professor.valor_hora)}</Valor>
                            <Descricao>{FormatadorService.limitarTexto(professor.descricao, 200)}</Descricao>
                            <Button onClick={()=> props.onSelect(professor)} sx={{width: '70%'}}>Marcar Aula com {professor.name}</Button>
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