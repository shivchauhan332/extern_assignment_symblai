import TableRow from "./TableRow";
const Table = ({data})=>{
    return (
        <div className="limiter">
		<div className="container-table100">
			<div className="wrap-table100">
				<div className="table100">
					<table>
						<thead>
							<tr className="table100-head">
								<th className="column1">ID</th>
								<th className="column2">Name</th>
							</tr>
						</thead>
						<tbody>
                {data && data.map((item)=>(
                    <TableRow item={item}/>
                ))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Table;