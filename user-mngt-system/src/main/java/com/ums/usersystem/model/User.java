package com.ums.usersystem.model;

/**
 * A model, often referred to as a Data Transfer Object (DTO) or ViewModel,
 * represents a data structure used for transferring data between different
 * parts of your application, such as between the controller and the view.
 * Models are not necessarily tied to database entities but are designed
 * to carry data between layers of your application, like the controller
 * and the view. They are used to encapsulate and structure data in a way
 * that is suitable for presentation or processing, often including only
 * the necessary fields.Models may not have database annotations like@Entity
 * or @Table because they are not intended for direct database persistence
 */

public class User {
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;

    public User(long id, String firstName, String lastName, String emailId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public User() {

    }
}
