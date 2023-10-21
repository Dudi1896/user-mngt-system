package com.ums.usersystem.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName")
    private String lastName;

    @Column(name = "email")
    private String emailId;

}
