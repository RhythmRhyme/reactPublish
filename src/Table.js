const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Job</th>
            <th>Operation</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.charactersData.map((row, index) => {
        return (
            <tr key={index}>
                <th>{index}</th>
                <th>{row.name}</th>
                <th>{row.job}</th>
                <th>
                    <button onClick={() => {
                        props.removeCharacter(index);
                    }}>Delete
                    </button>
                </th>
            </tr>
        )
    })
    return <thead>{rows}</thead>;
}

const Table = (props) => {
    const {charactersData, removeCharacter} = props;
    return (
        <table>
            <TableHeader/>
            <TableBody charactersData={charactersData} removeCharacter={removeCharacter}/>
        </table>
    )
}

export default Table;