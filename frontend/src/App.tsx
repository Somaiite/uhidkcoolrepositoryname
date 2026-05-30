import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Card from '@mui/joy/Card';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


import './App.css'
import {useState} from "react";

const errorQueue: string[] = [];

// Approach:
// User enters info into text fields (labeled by className)
// User clicks submit button
// handleSubmit method calls respective validation helper methods
// If validation is successful, call backend API endpoint to insert new Student into database
// Return Http status code depending on successful insertion (201 CREATED) or failure (500 INTERNAL SERVER ERROR) and a message

/**
 * Validates first name input
 *
 * @param firstNameInput	first name that user has entered
 * @return					true, if first name is not empty and only has alphabetic characters
 * 							false, otherwise
 */
const validateFirstName = (firstNameInput: string): boolean => {
	// First name can't be blank (after trimming whitespaces) and it can't have any non-alphabetic characters
	return firstNameInput.trim().length > 0 && !/[^a-zA-Z]/.test(firstNameInput);
};

/**
 * Validates last name input
 *
 * @param lastNameInput		last name that user has entered
 * @return					true, if last name is not empty and only has alphabetic characters
 * 							false, otherwise
 */
const validateLastName = (lastNameInput: string): boolean => {
	return lastNameInput.trim().length > 0 && !/[^a-zA-Z]/.test(lastNameInput);
};

/**
 * Validates address input
 *
 * @param addressInput	address that user has entered
 * @return 				true, if address is not empty
 * 						false, otherwise
 */
const validateAddress = (addressInput: string): boolean => {
	// Address can't be blank after whitespaces
	return addressInput.trim().length > 0;
}

/**
 * Validates gpa input
 *
 * @param gpaInput	gpa that user has entered
 * @return			true, if gpa isn't blank and its between 0.0 and 4.0
 * 					false, otherwise
 */
const validateGPA = (gpaInput: string): boolean => {
	// If the string is empty after removing whitespaces
	if (gpaInput.trim().length === 0) {
		return false;
	}

	// Convert given string to a number for gpa value
	const gpa = Number(gpaInput);

	// We are using a 4.0 scale for gpa
	return gpa >= 0.0 && gpa <= 4.0;
}

function App() {
	// Define the fields in the JSON request
	interface StudentForm {
		firstName: string;
		lastName: string;
		address: string;
		gpa: string;
	}

	// Keep track of changing state of input in the text fields
	const [student, setStudent] = useState<StudentForm>({
		firstName: '',
		lastName: '',
		address: '',
		gpa: '',
	});

	// Keep track of any validation errors
	const [errors, setErrors] = useState({
		firstName: false,
		lastName: false,
		address: false,
		gpa: false,
	});

	// Called after user clicks on submit button
	const handleSubmit = async() => {
		errorQueue.length = 0;

		const isFirstNameValid = validateFirstName(student.firstName);
		const isLastNameValid = validateLastName(student.lastName);
		const isGpaValid = validateGPA(student.address);
		const isAddressValid = validateAddress(student.gpa);

		setErrors({
			firstName: !isFirstNameValid,
			lastName: !isLastNameValid,
			gpa: !isGpaValid,
			address: !isAddressValid,
		});

		if (!isFirstNameValid || !isLastNameValid || !isGpaValid || !isAddressValid)
		{
			return;
		}

		try {
			const response = await fetch('http://localhost:8080/students', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName: student.firstName,
					lastName: student.lastName,
					address: student.address,
					gpa: Number(student.gpa),
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
			}

			console.log('Student created successfully');

			// optional reset
			setStudent({
				firstName: '',
				lastName: '',
				address: '',
				gpa: '',
			});

			setErrors({
				firstName: false,
				lastName: false,
				address: false,
				gpa: false,
			});

		} catch (err) {
			console.error('Request failed:', err);
		}
	}

	return (
		<>
			<h1>Student Management System</h1>
			<div className={"container"}>
				<div className={"form"}>
					<Card
						size="md"
						sx={{width: { xs: '100%', sm: '400px' }}}
						color="neutral"
						invertedColors={false}
						orientation="vertical"
						variant="outlined"
					>
					<h3>First Name:</h3>
					<Input id="first-name"
						// className={errors.firstName ? "input-error" : ""}
						placeholder="Enter student's first name..."
						size="md"
						variant="outlined"
						color={errors.firstName ? "danger" : "neutral"}
					/>
					<h3>Last Name:</h3>
					<Input id="last-name"
						placeholder="Enter student's last name..."
						size="md"
						variant="outlined"
						color={errors.lastName ? "danger" : "neutral"}
					/>
					<h3>Address:</h3>
					<Input id="address"
						placeholder="Enter student's address..."
						size="md"
						variant="outlined"
						color={errors.address ? "danger" : "neutral"}
					/>
					<h3>GPA:</h3>
					<Input id="gpa"
						placeholder="Enter GPA..."
						size="md"
						variant="outlined"
						color={errors.gpa ? "danger" : "neutral"}
					/>
					<Button id="add-student-button"
							size="lg"
							endDecorator={<KeyboardArrowRight />}
							color="success"
							onClick={handleSubmit}>
						Add Student
					</Button>
					</Card>
				</div>
			</div>
		</>
	);
}

export default App
