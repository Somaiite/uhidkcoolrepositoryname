import java.sql.SQLException;

public class Main {
	public static void main(String[] args) throws SQLException {
		// Create a new student with the following info
		Student myStudent = new Student(3.5, "123 Main St, Sacramento CA", "John","doe");

		// Print student info to terminal
		System.out.println(myStudent.toString());

		// Save to created student database
		DatabaseService dbService = new DatabaseService();

		// Print result of save() method since it returns a string
		System.out.println(dbService.save(myStudent));
	}
}
