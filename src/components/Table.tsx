import * as React from 'react';

import TableBody from './TableBody';
import TableInputs from './TableInputs';

export type Animal = {
	ownerName: string;
	animalName: string;
	animalAge: number;
}


const initialAnimalList:Animal[] = [{ownerName:'Xyz', animalName:'Frozen', animalAge:6}];

export default function Table() {
	const [animals, setAnimals] = React.useState<Animal[]>(initialAnimalList);

	const handleDelete = (name: string) => {
		const updatedRows = animals.filter((row) => row.ownerName !== name);
		setAnimals(updatedRows);
	};

	const addAnimal = (newAnimal:Animal) => {
		setAnimals((prevAnimal) => [...prevAnimal, newAnimal]);
	};

	return (
		<>
			<TableInputs addAnimal={addAnimal} />
			<TableBody animals={animals} handleDelete={handleDelete}/>
		</>
	);
}
