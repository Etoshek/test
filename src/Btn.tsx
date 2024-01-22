import { Button, ButtonProps } from '@mui/material';

import React from 'react';

// interface ButtonProps {
// 	handleActionButton: any;
// 	textButton: string | undefined;
// }
// const ActionButton = ({ handleActionButton, textButton }: ButtonProps) => {
// 	return (
// 		<>
// 			<Button variant='outlined' onClick={handleActionButton}>
// 				{textButton}
// 			</Button>
// 		</>
// 	);
// };
// export default ActionButton;

type ButtonType = ButtonProps & {};

export const ActionButton = (props: ButtonType) => {
	return <Button {...props}
	variant='outlined' />
}

