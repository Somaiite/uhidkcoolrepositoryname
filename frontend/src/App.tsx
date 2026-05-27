import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Card from '@mui/joy/Card';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


import './App.css'

function App() {
	return (
		<>
			<h1>Student Management System</h1>
			<div className={"container"}>
				<div className={"form"}>
					<Card size="md"
						  sx={{
							  width: { xs: '100%', sm: '400px' }}}
						color="neutral"
						invertedColors={false}
						orientation="vertical"
						variant="outlined"
					>
					<Input placeholder="Enter student's first name..."
						size="md"
						variant="outlined"
					/>
					<Input placeholder="Enter student's last name..."
						size="md"
						variant="outlined"
					/>
					<Input
						placeholder="Enter student's address..."
						size="md"
							variant="outlined"
					/>
					<Button endDecorator={<KeyboardArrowRight />} color="success">
						Add Student
					</Button>
					{/*<Button endDecorator={<KeyboardArrowRight />} color="success">*/}
					{/*  Go to checkout*/}
					{/*</Button>*/}
					</Card>
				</div>
			</div>
		</>
	);
}

export default App
