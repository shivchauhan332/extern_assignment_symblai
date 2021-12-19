
const TableRow = ({ item }) => {
    return (
        <tr>
            <td className="column1">{item.id}</td>
            <td className="column2">{item.name}</td>
        </tr>
    )
}

export default TableRow;