import React from 'react'
import { Table } from  "@radix-ui/themes";


const TableRepairOrder = () => {
  return (
    
    <Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Priority</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>CreatedBy</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>AssigneeTo</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Mesin</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>StartDate</Table.ColumnHeaderCell>
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

		

		
	</Table.Body>
</Table.Root>

  )
}

export default TableRepairOrder