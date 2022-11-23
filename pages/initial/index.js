import { useRef, useState } from "react";
import Link from 'next/link'


import style from "./style.module.css";

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
        const countLength = `${valor}: ${valor.length}`;
        setvalor(countLength);
    };

    const toClear = () => {
        setvalor('');
    };

    return (
        <>
            <header>
                <nav className={style.nav}>
                    <Link href="/">
                        <a>
                            <h1>ConvertSmallCase</h1>
                        </a>
                    </Link>
                    <h2>
                        Simply enter your text and choose the case you want to convert it to.
                    </h2>
                </nav>
            </header>

            <main className={style.main}>
                <div className={style.formgroup}>
                    <textarea type="text" className="form-control rounded-0" id="textArea" rows="8" value={valor} ref={textAreaRef}
                        onChange={e => setvalor(e.target.value)}></textarea>
                </div>
                <div className={style.result}>
                    <h3>{valor}</h3>
                </div>
                <div className={style.buttons}>
                    <h4>
                        <button onClick={toCopy} className="btn btn-outline-primary" title="Copy" >
                            Copy
                        </button>
                    </h4>
                    <h4>
                        <button onClick={toCut} className="btn btn-outline-primary mx-1 my-1" title="Cut">
                            Cut out
                        </button>
                    </h4>

                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1 my-1" onClick={toCountLength} title="to Count Length">
                            Number of Characters
                        </button>
                    </h4>

                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toUpperCase} title="to Upper Case">
                            CAPITAL LETTERS
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toLowerCase} title="to Lower Case">
                            lowercase letterss
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toReverse} title="to Reverse">
                            Invert text
                        </button>
                    </h4>
                    <h4>
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toSort} title="to Sort">
                            Shuffle Words
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
                        <button className="btn btn-outline-primary mx-1 my-1" onClick={toClear} title="to Clear">
                            Clear
                        </button>
                    </h4>
                </div>
            </main>
        </>
    )
}


export default Initial;