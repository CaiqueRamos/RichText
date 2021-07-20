import React, { Component, createElement, useEffect, useState } from "react";
import './RichText.css';
import linkImg from "../img/link.png"
import list from "../img/list.png"
import referenceImg from "../img/reference.png"
import sublime from "../img/sublime.png"
import upper from "../img/upper.png"

function RichText() {

    const [textField, setTextField] = useState("");

    function Upper() {
        setTextField(textField.toUpperCase());
    }

    function List() {    
        if(textField.substr(0,1) != "•"){
            setTextField( "•" + textField);
        }else {
            window.alert("Lista ja adicionada")
        } 
    }

    function reference() {    
        if(textField.substr(0,1) != `"`){
            setTextField( `\"${textField}\"`);
        }else {
            window.alert("Referencia ja adicionada")
        } 
    }

    function linkAdd(){
        var aux = window.prompt("Qual link deseja Adicionar");
        setTextField(textField.link(aux));
    }

    function sublimer(){
        document.getElementById("texto").style = "text-decoration: underline"
    }

    return (
        <div className="rich--body">
            <div className="actions--options">
                <ul className="list--itens">
                    <li className="itens">
                        <button className="button--actions" onClick={Upper}>
                            <img src={upper} alt="" />
                        </button>
                    </li>
                    <li className="itens">
                        <button className="button--actions" onClick={List}>
                            <img src={list} alt="" />
                        </button>
                    </li>
                    <li className="itens">
                        <button className="button--actions">
                            <img src={referenceImg} alt="" onClick={reference}/>
                        </button>
                    </li>
                    <li className="itens">
                        <button className="button--actions" onClick={linkAdd}>
                            <img src={linkImg} alt="" />
                        </button>
                    </li>
                    <li className="itens">
                        <button className="button--actions" onClick={sublimer}>
                            <img src={sublime} alt="" />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="actions--inputs">
                <textarea
                    id="texto"
                    className="text--field"
                    value={textField}
                    onChange={aux => setTextField(aux.target.value)}
                    cols="30" rows="10" 
                    >
                </textarea>
            </div>

        </div>
    )

}

export default RichText;
