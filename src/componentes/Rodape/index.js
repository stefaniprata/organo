import './Rodape.css'

const Rodape = () => {
    return (
    <footer className="footer">
        <ul>
            <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/fb.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="/imagens/tw.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer">
                    <img src="/imagens/ig.png" alt="" />
                </a>
            </li>
        </ul>
        <img src="/imagens/logo.png" alt="" />
        <p>
            Desenvolvido por Alura.
        </p>
    </footer>
    )
}

export default Rodape
