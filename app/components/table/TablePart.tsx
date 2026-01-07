"use client"
import React from 'react'
import { Table } from  "@radix-ui/themes";
import { useEffect, useState } from "react";


type Part = {
  id: string;
  name: string;
  description: string;
  stock: number;
};



const TablePart = () => {

	const [parts, setParts] = useState<Part[]>([]);
	  const [loading, setLoading] = useState(true);
	
	  useEffect(() => {
		fetch("/api/part")
		  .then((res) => res.json())
		  .then((data) => {
			setParts(data);
			setLoading(false);
		  });
	  }, []);
	
	  if (loading) return <p>Loading...</p>;




  return (
    
    <Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Stok</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body >
		{parts.map((part) => (
			<Table.Row key={part.id}>
				<Table.RowHeaderCell>{part.id}</Table.RowHeaderCell>
				<Table.Cell>{part.name}</Table.Cell>
				<Table.Cell>{part.description}</Table.Cell>
				<Table.Cell>{part.stock}</Table.Cell>
				<Table.Cell>
					<button className="text-blue-500 hover:underline mr-2">Edit</button>
					<button className="text-red-500 hover:underline">Delete</button>
				</Table.Cell>
			</Table.Row>
		))}
	</Table.Body>
</Table.Root>

  )
}

export default TablePart