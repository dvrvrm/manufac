import Statistics from "./Statistics";

function Gamma(props) {
    return (
        <div>
            <button onClick={() => props.addGamma()}>Add Gamma</button>
            <Statistics keyName="Gamma" wineJson={props.wineJson}></Statistics>
        </div>
    )
}

export default Gamma;