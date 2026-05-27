package io.github.somaiite;
/**
 * Service class that implements database operations
 *
 * @author sebastianwhyte
 * @date 05/24/2026
 * @version 1.0
 */

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DatabaseService 
{
  /**
   *
   * @param student   new student to save to database
   * @return          message stating if save was successful
   * @throws SQLException
   */
  public String save(Student student) throws SQLException {
    // Use Database credentials to log into Database
    // TODO -- Secure credentials 5/24/26 -SW

    String dbUrl = "INSERT_DB_URL_HERE";
    String username = "INSERT_USERNAME_HERE";
      String password = "INSERT_PASSWORD_HERE";

    // Attempt to connect to database
    try (Connection connection = DriverManager.getConnection(dbUrl, username, password)) {
      // Create sql query to insert student into Database. Specify which columns we want to update
      // We will replace the question marks in the following setString statements
      String sql = "INSERT INTO students (gpa, first_name, last_name, address) VALUES (?,?,?,?)";

      // PreparedStatement will run the query we just made above
      PreparedStatement ps = connection.prepareStatement(sql);

      // 1 = gpa column
      ps.setDouble(1, student.getGpa());
      // 2 = first_name column
      ps.setString(2, student.getFirstName());
      // 3 - last_name column
      ps.setString(3, student.getLastName());
      // 4 - address column
      ps.setString(4, student.getAddress());

      // executeUpdate() method returns the number of rows affected. If rowsInserted is 0, then the insertion failed.
      // Otherwise, the insertion was successful
      int rowsInserted = ps.executeUpdate();

      if (rowsInserted > 0) {
        return "New Student was successfully saved to Database";
      } else {
        return "Failed to save new Student to Database";
      }
    }
  }
}
