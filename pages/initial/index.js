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
        setvalor(valor);
    };

    const toCut = (e) => {
        textAreaRef.current.select();
        document.execCommand('cut');
        e.target.focus();
        setvalor(valor);
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
        const countLength = `${valor}: ${valor.length}`

        

        setvalor(countLength);
    };

    const toClear = () => {
        setvalor('');
    };

    return (
        <>
            <nav className={style.nav}>

                {/* <Image
                    src={ImageLogo}
                    alt="logo"
                    width={200}
                    height={200}
                /> */}
                <a href="/">
                    ConvertSmallCase
                </a>
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
                    <button onClick={toCopy} className="btn btn-outline-primary mx-1 my-1 mx-1" title="Copy">
                        copy
                    </button>
                    <button onClick={toCut} className="btn btn-outline-primary mx-1 my-1" title="Cut">
                        cut out
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1 my-1" onClick={toCountLength} title="to Count Length">
                        Number of Characters
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toUpperCase} title="to Upper Case">
                        Capital letters
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toLowerCase} title="to Lower Case">
                        Lowercase Letterss
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toReverse} title="to Reverse">
                        Invert text
                    </button>
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toSort} title="to Sort">
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
                    <button className="btn btn-outline-primary mx-1 my-1" onClick={toClear} title="to Clear">
                        Clear
                    </button>
                </div>
            </main>
        </>
    )
}


export default Initial;