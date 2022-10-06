import type { NextPage } from 'next'

function Botao(props: { titulo: string | number | boolean | null | undefined }) {
  return <a href="#">{props.titulo}</a>
}

const Home: NextPage = () => {
  return (
    <div>
      <Botao titulo="Click" /><br/>
      <Botao titulo="Entrar" /><br/>
      <Botao titulo="Ver" /><br/>
    </div>
  )
}

export default Home
