import './style4.scss'
import youtubeImage from './../../assets/images/imgAleatoriaDoYoutube.png'
import ivinem from './../../assets/images/ivinem.png'

export function Aula_04 () {

  const componentesEncontrados = [
    {
      id:1,
      image: ivinem,
      title: "Ivinem new song - Potato",
      text:"Assista agora novo Hit do Ivinem",
      views:"62,1 mil visualizações - há 3 horas"

    },
    {
      id:2,
      image: "https://reactjs.org/logo-og.png",
      title: "Como aprender React",
      text:"Desde o basico ao avançado",
      views:"73,8 mil visualizações - há 2 dias"
    },
    {
      id:3,
      image: youtubeImage,
      title: "Ce LOKO Bixao",
      text:"Doidos falando doideiras sobre loucuras",
      views:"157 mil visualizações - há 4 dias"
    }
  ]

  return (
    <div className="quarta-aula-component">
      <h1>My YouTube Page:</h1>
      <ul>

        {
          componentesEncontrados.map(
            componente => {
              return (
                <li key={componente.id}>
                  <img src={componente.image} />
                  <h2>{componente.title}</h2>
                  <p>{componente.text}</p>
                  <p>{componente.views}</p>
              </li>
              )
            }
          )
        }

      </ul>
    </div>
    
  )
}