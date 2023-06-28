import Statistics from "./Statistics";

function Flavanoids(props) {
    return (
        <div>
            <Statistics keyName="Flavanoids" wineJson={props.wineJson}></Statistics>
        </div>
    )
}

export default Flavanoids;