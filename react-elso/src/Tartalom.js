import './Tartalom.css';

export default function Tartalom(props){
    const darabszam = props.darabszam || 5;
    const bekezdesek = [];
    for (let i = 0; i < darabszam; i++) {
        bekezdesek.push(<p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>);
    }
    return (
        <div id='content' className='Elso-content'>
            {bekezdesek}
        </div>
    );
}