"use client"
import React from 'react'
import { Table } from  "@radix-ui/themes";
import { useEffect, useState } from "react";
import EditDialogRepairPart from '../editdialog/EditDialogRepairPart';


type RepairPart = {
	id: number;
	partId: number;
	quantity: number;
	createdAt: number;
	repairOrderId: number
}

const TableRepairPart = () => {

	const [repairParts, setRepairParts] = useState<RepairPart[]>([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		fetch("/api/repairpart")
		  .then((res) => res.json())
		  .then((data) => {
			setRepairParts(data);
			setLoading(false);
		  });
	  }, []);
	
	  if (loading) return <p>Loading...</p>;


  return (
    
    <Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Part Id</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Repair Id</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body>
		{repairParts.map((repairPart) => (
			<Table.Row key={repairPart.id}>
				<Table.RowHeaderCell>{repairPart.id}</Table.RowHeaderCell>
				<Table.Cell>{repairPart.partId}</Table.Cell>
				<Table.Cell>{repairPart.quantity}</Table.Cell>
				<Table.Cell>{repairPart.repairOrderId}</Table.Cell>
				<Table.Cell>
					<EditDialogRepairPart repairPart={repairPart} />
					<button className="bg-red-500 text-xs hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
				</Table.Cell>
			</Table.Row>
		))}
	</Table.Body>
</Table.Root>

  )
}

export default TableRepairPart