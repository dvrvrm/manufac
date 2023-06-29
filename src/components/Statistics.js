import { getClasswiseMean, getClasswiseMedian, getClasswiseMode } from "../utils/data-parser";

function Statistics(props) {
    let stats = {}; // stats = {1: [2.3, 4.5, 5.3,... Flavanoids or Gamma], 2: [2.3, 4.5, 5.3,... Flavanoids or Gamma], ..}

    props.wineJson.forEach((entry) => {
        if (entry[props.keyName]) {
            if (!stats[entry.Alcohol]) {
                stats[entry.Alcohol] = [];
            }
            stats[entry.Alcohol].push(parseFloat(entry[props.keyName]));
        }
    });

    let alcoholIndices = Object.keys(stats);
    const meanArr = getClasswiseMean(alcoholIndices, stats); //meanArr = [{aClass: '1',value: '3.3'}, {aClass: '2', value: '3.3'}]
    const medianArr = getClasswiseMedian(alcoholIndices, stats);
    const modeArr = getClasswiseMode(alcoholIndices, stats);

    return <> {

        <table>
            <tbody>
                <tr>
                    <th>Measure</th>
                    {
                        alcoholIndices.map((item, index) => {
                            return (<th key={index}>Class {item}</th>);
                        })
                    }
                </tr>
                <tr>
                    <th>{props.keyName} Mean</th>
                    {
                        meanArr.map((item) => {
                            return (
                                <td key={item.aClass}>{item.value}</td>

                            );
                        })
                    }
                </tr>
                <tr>
                    <th>{props.keyName} Median</th>
                    {
                        medianArr.map((item) => {
                            return (
                                <td key={item.aClass}>{item.value}</td>

                            );
                        })
                    }
                </tr >
                <tr>
                    <th>{props.keyName} Mode</th>
                    {
                        modeArr.map((item) => {
                            return (
                                <td key={item.aClass}>{item.value}</td>

                            );
                        })
                    }
                </tr >
            </tbody>
        </table >
    }
    </>
}

export default Statistics;