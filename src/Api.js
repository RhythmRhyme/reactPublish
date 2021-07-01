import React, {Component} from "react";

class Api extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=google&format=json&origin=*';
        // fetch(url)
        //     .then((result) => {
        //         console.log("first");
        //         console.log(result);
        //         result.json();
        //     })
        //     .then((result) => {
        //         console.log("second");
        //         console.log(result);
        //         this.setState({
        //          data: result
        //         })
        //     })

        fetch(url)
            .then((result) => {
                return result.json();
            })
            .then((result) => {
                console.log("second");
                console.log(result);
                this.setState({
                    data: result
                })
            })

        // fetch(url)
        //     .then((result) =>
        //         result.json()
        //     )
        //     .then((result) => {
        //         this.setState({
        //             data: result,
        //         })
        //     })
    }

    render() {
        //console.log("this.state.data=" + this.state.data);
        const result = this.state.data.map((entry, index) => {
            console.log(entry);
            if (index === 0) {
                return <li key={index}>{entry}</li>
            }
            return <li key={index}>
                <ul>
                    {entry.map((e, i) => {
                        return <li key={i}>{e}</li>
                    })}
                </ul>
            </li>
        });
        return <ul>{result}</ul>;
    }
}

export default Api