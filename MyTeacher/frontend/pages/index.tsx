import type { NextPage } from 'next'
import { Box, Dialog, Grid, TextField, Button, DialogActions, Snackbar} from '@mui/material'
import Lista from '../src/components/lista/lista'
import { useIndex } from '../src/hooks/pages/useIndex'


const Home: NextPage = () => {
  const {
    listaProfessores,
    nome, setNome,
    email, setEmail,
    professorSelecionado, 
    setProfessorSelecionado,
    marcarAula,
    mensagem, setMensagem,
  } = useIndex()
  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
        professores={listaProfessores}
        onSelect={(professor) => setProfessorSelecionado(professor)}></Lista>
      </Box>

      <Dialog onClose={() => setProfessorSelecionado(null)} open={professorSelecionado != null} fullWidth PaperProps={{sx: {p: 5 }}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
            label="Digite o nome" 
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField 
            label="Digite o email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth />
          </Grid>
        </Grid>
        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancelar</Button>
          <Button onClick={() => marcarAula()}>Marcar</Button>
        </DialogActions>
      </Dialog>
      <Snackbar 
      message={mensagem}
      onClose={() => setMensagem('')}
      autoHideDuration={2500}
      open={mensagem.length > 0} />
    </>
  )
}

export default Home
