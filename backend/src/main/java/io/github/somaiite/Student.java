package io.github.somaiite;

public class Student {
    private double gpa;
    private String address;
    private int ID;
    private String firstName;
    private String lastName;

    public Student() {
    }

    public Student(double gpa, String address, String firstName, String lastName) {
        this.gpa = gpa;
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public double getGpa() {
        return gpa;
    }

    public void setGpa(double gpa) {
        this.gpa = gpa;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String adress) {
        this.address = adress;
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
                "id=" + ID +
                "gpa=" + gpa +
                ", address='" + address + '\'' +
                ", ID=" + ID +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                '}';
    }
}
