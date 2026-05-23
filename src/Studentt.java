public class Studentt {
    private double gpa;
    private String adress;
    private int ID;
    private String firstName;
    private String lastName;

    public Studentt() {
    }

    public Studentt(double gpa, String adress, int ID, String firstName, String lastName) {
        this.gpa = gpa;
        this.adress = adress;
        this.ID = ID;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        return "Studentt{" +
                "gpa=" + gpa +
                ", adress='" + adress + '\'' +
                ", ID=" + ID +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
