import type { NextPage } from 'next'
import { Box } from '@mui/material'
import Lista from '../src/components/lista/lista'
import { Professor } from '../src/@types/professor'


const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'MulinhaGPlays',
      foto: 'https://github.com/MulinhaGPlays.png',
      descricao: 'Descrição do professor 1',
      valor_horas: 100
    },
    {
      id: 2,
      nome: 'MulinhaGPlays',
      foto: 'https://github.com/MulinhaGPlays.png',
      descricao: 'Descrição do professor 2',
      valor_horas: 100
    },
    {
      id: 3,
      nome: 'MulinhaGPlays',
      foto: 'https://github.com/MulinhaGPlays.png',
      descricao: 'Descrição do professor 3',
      valor_horas: 100
    },
  ]

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={professores}></Lista>
      </Box>
    </>
  )
}

export default Home
