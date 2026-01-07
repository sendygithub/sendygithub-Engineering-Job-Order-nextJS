"use client"

import React, { use } from 'react'
import { Table } from  "@radix-ui/themes";
import { useEffect } from "react";


type repairOrder = {
	id: string;
	description: string;
	priority: string;
	createdById: number;
	assignedToId: number;
	machineId: string;
	startDate: string;
	status: string;
	notes: string;

}



const TableRepairOrder = () => {

const [data, setData] = React.useState<repairOrder[]>([]);
const [isLoading, setLoading] = React.useState(false);

useEffect(() => {
  fetch("/api/repairorder")
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
			<Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Priority</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>CreatedBy</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>AssigneeTo</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>MachineId</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>StartDate</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Notes</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body >
		{data.map((order) => (
			<Table.Row key={order.id}>
				<Table.RowHeaderCell>{order.id}</Table.RowHeaderCell>
				<Table.Cell>{order.description}</Table.Cell>
				<Table.Cell>{order.priority}</Table.Cell>
				<Table.Cell>{order.createdById}</Table.Cell>
				<Table.Cell>{order.assignedToId}</Table.Cell>
				<Table.Cell>{order.machineId}</Table.Cell>
				<Table.Cell>{order.startDate}</Table.Cell>
				<Table.Cell>{order.status}</Table.Cell>
				<Table.Cell>{order.notes}</Table.Cell>
				<Table.Cell>
					<button className="bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold py-2 px-4 rounded">selesai</button>
					<button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 text-xs px-4 rounded">on progress</button>
				</Table.Cell>
			</Table.Row>
		))
		}
		
	</Table.Body>
</Table.Root>

  )
}

export default TableRepairOrder