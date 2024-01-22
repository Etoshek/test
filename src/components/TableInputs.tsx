import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Animal } from './Table';

type TableInputsProps = { addAnimal: (animal: Animal) => void };

const TableInputs = ({ addAnimal }: TableInputsProps) => {
	const [ownerName, setOwnerName] = React.useState<string>('');
	const [animalName, setAnimalName] = React.useState<string>('');
	const [animalAge, setAnimalAge] = React.useState<number>(0);

	const handleAddAnimal = () => {
		addAnimal({ ownerName, animalName, animalAge });
		setOwnerName('');
		setAnimalName('');
		setAnimalAge(0);
	};

	return (
		<Box
			component='form'
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete='off'
		>
			<TextField
				id='owner-name'
				label='Imię opiekuna'
				variant='outlined'
				value={ownerName}
				onChange={(e) => setOwnerName(e.target.value)}
			/>
			<TextField
				id='animal-name'
				label='Imię zwierzaka'
				variant='outlined'
				value={animalName}
				onChange={(e) => setAnimalName(e.target.value)}
			/>
			<TextField
				id='age'
				label='Wiek'
				variant='outlined'
				type='number'
				value={animalAge}
				onChange={(e) => setAnimalAge(Number(e.target.value))}
			/>

			<Button variant='contained' onClick={handleAddAnimal}>
				Dodaj zwierzaka
			</Button>
		</Box>
	);
};

export default TableInputs;
