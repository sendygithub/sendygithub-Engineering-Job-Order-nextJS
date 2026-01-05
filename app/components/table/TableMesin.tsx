import React from 'react'
import { Table } from  "@radix-ui/themes";


const TableMesin = () => {
  return (
    
    <Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Location</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
		</Table.Row>
	</Table.Header>

	<Table.Body>
		<Table.Row>
			<Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
			<Table.Cell>danilo@example.com</Table.Cell>
			<Table.Cell>Developer</Table.Cell>
		</Table.Row>

		<Table.Row>
			<Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
			<Table.Cell>zahra@example.com</Table.Cell>
			<Table.Cell>Admin</Table.Cell>
		</Table.Row>

		<Table.Row>
			<Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
			<Table.Cell>jasper@example.com</Table.Cell>
			<Table.Cell>Developer</Table.Cell>
		</Table.Row>
	</Table.Body>
</Table.Root>

  )
}

export default TableMesin