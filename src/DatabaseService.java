/* Service class that implements database operations
*
*  @author sebastianwhyte
*  @date 05/24/2026
*  @version 1.0
*/

import java.sql.DriverManager;
import java.sql.Connection;
import java.sql.PreparedStatement;

public class DatabaseService 
{
  public String save(Student student) 
  {
    // Use Database credentials to log into Database
    // TODO -- Secure credentials 5/24/26 -SW
    
    String dbUrl = "jdbc:mysql://";
    String username = "user";
    String password = "my_password";

    // Attempt to connect to database
    try (Connection connection = DriverManager.getConnection(dbUrl, username, password)) 
    {
      // Create sql statement to insert student into Database. Specify which columns we want to update. We will replace the question marks in the following setString statements
      // TODO -- Create db schema and update sql query based on that 5/24/26 -SW
      String sql = "INSERT INTO students (gpa, first_name, last_name, address) VALUES (?,?,?,?)";

      PreparedStatement ps = connection.prepareStatement(sql);

      // 1 = gpa column
      ps.setString(1, 0.0);
      // 2 = first_name column
      ps.setString(2, "Beyonce");
      // 3 - last_name column
      ps.setString(3, "Knowles");
      // 4 - address column
      ps.setString(4, "17 MLK Blvd, Newark, NJ");

      // Return rows affected. If rowsInserted < 1, then the insertion failed. Otherwise, the insertion was successful
      int rowsInserted = ps.executeUpdate();

      if (rowsInserted > 0) {
        return "New Student was successfully saved to Database";
      }
      else
      {
        return "Failed to save new Student to Database";
      }
    }
      return "";
}
