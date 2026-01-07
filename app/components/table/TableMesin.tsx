"use client"

import React from 'react'
import { Table } from  "@radix-ui/themes";
import { useEffect } from "react";
type MachineId = {
	id: string
	description: string
	location: string
	name: string
	status: string
}
const TableMesin = () => {


const [data, setData] = React.useState<MachineId[]>([]);
const [isLoading, setLoading] = React.useState(false);

useEffect(() => {
  fetch("/api/mesin")
	.then((res) => res.json())
	.then((data) => {
	  setData(data);
	  setLoading(false);
	});
},[]);

if (isLoading) return <p>Loading...</p>;

  return (
    
    <Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
			
			<Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body>
		{data.map((machine) => (
			<Table.Row key={machine.id}>
				<Table.RowHeaderCell>{machine.id}</Table.RowHeaderCell>
				<Table.Cell>{machine.name}</Table.Cell>
				<Table.Cell>{machine.description}</Table.Cell>
				<Table.Cell>{machine.location}</Table.Cell>
				<Table.Cell>{machine.status}</Table.Cell>
				<Table.Cell>
					<button className="bg-blue-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
						Edit
					</button>
					<button className="bg-red-500 text-xs hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
						delete
					</button>
				</Table.Cell>
			</Table.Row>
		))}
		
	</Table.Body>
</Table.Root>

  )
}

export default TableMesin