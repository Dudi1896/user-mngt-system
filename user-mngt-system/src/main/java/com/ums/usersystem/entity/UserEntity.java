package com.ums.usersystem.entity;
import jakarta.persistence.*;

/**
 * An entity typically represents a data object that is persisted in a
 * database.Entities are usually used in the context of Object-Relational
 * Mapping (ORM) frameworks like Hibernate or JPA (Java Persistence API).
 * Entities are annotated with database-specific annotations
 * (e.g., @Entity, @Table, @Column) to define their mapping to database
 * tables and columns.Entities are part of the data layer and are responsible
 * for modeling the structure of your database tables.They often have fields
 * that correspond to database columns, and their instances represent
 * individual records in the database.
*/

@Entity
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String firstName;
    private String lastName;
    private String emailId;

    public UserEntity(long id, String firstName, String lastName, String emailId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailId = emailId;
    }
    public UserEntity() {
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
}
