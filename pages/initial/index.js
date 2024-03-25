import { useRef, useState, useEffect } from "react";
import Link from 'next/link'


import jsPDF from 'jspdf';

import CustomHTML from './CustomHTML';


import style from "./style.module.css";

let Initial = () => {

    let [valor, setvalor] = useState('');
    let textAreaRef = useRef(null);

    let toCopy = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setvalor(valor);
    };

    let toCut = (e) => {
        textAreaRef.current.select();
        document.execCommand('cut');
        e.target.focus();
        setvalor(valor);

        alert("Recortado!")
    };

    let toUpperCase = (event) => {
        event.preventDefault();
        setvalor(valor.toUpperCase());
    };

    let toLowerCase = (event) => {
        event.preventDefault();
        setvalor(valor.toLowerCase());
    };

    let toReverse = () => {
        setvalor(valor.split("").reverse("").join(""));
    };

    let toSort = () => {
        setvalor(valor.split("").sort().join(""));
    };

    let toCountLength = () => {

        if (valor.length == '') {
            setvalor('')
        } else {
            setvalor(valor.length);
        }

        if (valor == 1 || valor == 2 || valor == 3 || valor == 4 || valor == 5 || valor == 6 || valor == 7 || valor == 8 || valor == 9) {
            setvalor('')
        }

    };

    let toClear = () => {
        setvalor('');
    };

    let toPDF = () => {

        if (valor == '') {
            valor = ''
        } else {
            var doc = new jsPDF()
            doc.text(valor, 5, 10)
            doc.save('a4.pdf')
        }
    }




    return (
        <>
        <script type='text/javascript' src='//pl22890023.profitablegatecpm.com/7e/54/c4/7e54c439c2b47dd6685547a766aac81f.js'></script>
            <header>
                <nav className={style.nav}>
                    <Link href="/">
                        <a>
                            <h1>ConvertSmallCase</h1>
                        </a>
                    </Link>
                    <h2>
                        Basta inserir seu texto e escolher o uso para  qual deseja convertê-lo.
                    </h2>
                </nav>
            </header>

            <main className={style.main}>
                <div className={style.formgroup}>
                    <textarea type="text" aria-label="textArea" required className="textArea form-control rounded-0" id="textArea" rows="8" value={valor} ref={textAreaRef}
                        onChange={e => setvalor(e.target.value)}></textarea>
                </div>
                <div className={style.result}>
                    <h3>{valor}</h3>
                </div>
                <div className={style.buttons}>
                    <h4>
                        <button onClick={toCopy} className="btn btn-outline-primary" title="Copy" >
                            Copiar
                        </button>
                    </h4>
                    <h4>
                        <button onClick={toCut} className="btn btn-outline-primary mx-1 my-1" title="Cut">
                            Recortar
                        </button>
                    </h4>

                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1 my-1" onClick={toCountLength} title="to Count Length">
                            Quantidade de Caracteres
                        </button>
                    </h4>

                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toUpperCase} title="to Upper Case">
                            LETRAS MAIÚSCULAS
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toLowerCase} title="to Lower Case">
                            letras minúsculas
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toReverse} title="to Reverse">
                            Inverter textos
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toSort} title="to Sort">
                            Embaralhar palavras
                        </button>
                    </h4>
                    {/* <button className="btn btn-outline-primary mx-1 my-1" onClick="clickBigWord()">
                        Maior Palavra
                    </button> */}
                    {/* <button className="btn btn-outline-primary mx-1 my-1" onClick="clickSmaller()">
                        Menor Palavra
                    </button> */}
                    {/* <button className="btn btn-outline-primary mx-1 my-1" onClick="CriaPDF()">
                        Converter texto para PDF
                    </button> */}
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toPDF} >
                            Gerar PDF
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toClear} title="to Clear">
                            Limpar
                        </button>
                    </h4>
                </div>
                <div className="anuncios">
                    <h3>
                        Anúncios
                    </h3>


                    <p className={style.span}>
                        Queremos compartilhar com você que o nosso site é mantido graças ao suporte de anúncios. Entendemos que anúncios podem ser uma parte inconveniente da sua experiência de navegação, mas gostaríamos de assegurar que cada anúncio exibido aqui desempenha um papel vital em manter nosso conteúdo gratuito e acessível a todos os nossos usuários.
                    </p>

                    <div className="card-anuncios">
                        <div className="anuncio">
                            <script async="async" data-cfasync="false" src="//pl22890200.profitablegatecpm.com/6614843b6f503fa80f14882c4f7604fc/invoke.js"></script>
                            <div id="container-6614843b6f503fa80f14882c4f7604fc"></div>
                        </div>

                        <div className="anuncio">
                            <script async="async" data-cfasync="false" src="//pl22890200.profitablegatecpm.com/6614843b6f503fa80f14882c4f7604fc/invoke.js"></script>
                            <div id="container-6614843b6f503fa80f14882c4f7604fc"></div>
                        </div>

                        <div className="anuncio">
                            <script async="async" data-cfasync="false" src="//pl22890200.profitablegatecpm.com/6614843b6f503fa80f14882c4f7604fc/invoke.js"></script>
                            <div id="container-6614843b6f503fa80f14882c4f7604fc"></div>
                        </div>
                    </div>
                </div>
                <CustomHTML />
                <div className={style.spacing}>
                <script type='text/javascript' src='//pl22890007.profitablegatecpm.com/ca/10/22/ca102243340209a99ee3a27402245adf.js'></script>
                </div>
            </main>



        </>
    )
}


export default Initial;