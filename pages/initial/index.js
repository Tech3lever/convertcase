import Image from 'next/image';

import { useRef, useState } from "react"
import style from "./style.module.css"

import ImageLogo from '../../images/logo.gif'

const Initial = () => {

    const [valor, setvalor] = useState('');
    const textAreaRef = useRef(null);

    const toCopy = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setvalor('Copied!');
    };

    const toCut = (e) => {
        textAreaRef.current.select();
        document.execCommand('cut');
        e.target.focus();
        setvalor('Cut out!');
    };

    const toUpperCase = (event) => {
        event.preventDefault();
        setvalor(valor.toUpperCase());
    };

    const toLowerCase = (event) => {
        event.preventDefault();
        setvalor(valor.toLowerCase());
    };

    const toReverse = () => {
        setvalor(valor.split("").reverse("").join(""));
    };

    const toSort = () => {
        setvalor(valor.split("").sort().join(""));
    };

    const toCountLength = () => {
        const countLength = `Number of characters: ${valor.length}`
        setvalor(countLength);
    };

    const toClear = () => {
        setvalor('');
    };

    return (
        <>
            <nav className={style.nav}>

                <Image
                    src={ImageLogo}
                    alt="logo"
                    width={200}
                    height={200}
                />
            </nav>

            <main className={style.main}>
                <div className={style.formgroup}>
                    <textarea type="text" className="form-control rounded-0" id="textArea" rows="8" value={valor} ref={textAreaRef}
                        onChange={e => setvalor(e.target.value)}></textarea>
                </div>
                <div className={style.result}>
                    {valor}
                </div>
                <div className="buttons w-75">
                    <button onClick={toCopy} className="btn btn-outline-primary mx-1 my-1 mx-1" title="Copiar">
                        copy
                    </button>
                    <button onClick={toCut} className="btn btn-outline-primary mx-1 my-1" title="Recortar">
                        cut out
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1 my-1" onClick={toCountLength} title="Quantidade de Caracteres">
                        Number of Characters
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toUpperCase}>
                        Capital letters
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toLowerCase}>
                        Lowercase Letterss
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toReverse}>
                        Invert text
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toSort}>
                        Shuffle Words
                    </button>
                    {/* <button className="btn btn-outline-primary mx-1 my-1" onClick="clickBigWord()">
                        Maior Palavra
                    </button> */}
                    {/* <button className="btn btn-outline-primary mx-1 my-1" onClick="clickSmaller()">
                        Menor Palavra
                    </button> */}
                    {/* <button className="btn btn-outline-primary mx-1 my-1" onClick="CriaPDF()">
                        Converter texto para PDF
                    </button> */}
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toClear}>
                        Clear
                    </button>
                </div>
            </main>
        </>
    )
}


export default Initial;