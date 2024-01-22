import * as React from 'react';
import Table from '@mui/material/Table';
import MuiTableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Animal } from './Table';

type TableBodyProps = { animals: Animal[]; handleDelete: any };

const TableBody = ({ animals, handleDelete }: TableBodyProps) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Imię opiekuna</TableCell>
						<TableCell align='right'>Imię zwierzaka</TableCell>
						<TableCell align='right'>Wiek</TableCell>
						<TableCell align='right'></TableCell>
					</TableRow>
				</TableHead>
				<MuiTableBody>
					{animals.map((row:Animal) => (
						<TableRow
							key={row.ownerName}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component='th' scope='row'>
								{row.ownerName}
							</TableCell>
							<TableCell align='right'>{row.animalName}</TableCell>
							<TableCell align='right'>{row.animalAge}</TableCell>
							<TableCell align='right'>
								<Button
									onClick={() => handleDelete(row.ownerName)}
									variant='outlined'
									color='error'
								>
									Usuń
								</Button>
							</TableCell>
						</TableRow>
					))}
				</MuiTableBody>
			</Table>
		</TableContainer>
	);
};

export default TableBody;
