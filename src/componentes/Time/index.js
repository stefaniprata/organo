import Colaborador from '../Colaborador';
import './Time.css'

const Time = (props, aoDeletar, mudarCor) => {
    const background = { backgroundColor: props.corSecundaria };
    return(
        (props.colaboradores.length > 0) ? <section className='time' style={background}>
            <input value={props.corSecundaria} onChange={evento => props.mudarCor(evento.target.value, props.nome)} type='color' className='input-cor' />
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                  return <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={aoDeletar} />
                })}
            </div>
        </section>
        : ''
    )
}

export default Time