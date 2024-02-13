import './Time.css'

const Time = (props) => {
    const background = { backgroundColor: props.corSecundaria };
    return(
        <section className='time' style={background}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        </section>
    )
}

export default Time