import './Footer.css';

export default function Footer(props){
    const nev = props.nev;
    const link = props.link;
    return (
    <footer className="Elso-footer">
        <p>
            Készítette: {nev} - elérhető <a href={link}>itt</a>.
        </p>
    </footer>
    );
}