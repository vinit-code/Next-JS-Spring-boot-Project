package org.agilearsenal.crudApplication.models;
import lombok.Data;
import lombok.ToString;

import java.util.UUID;

@Data
@ToString
public class Employee {
    private  UUID id;
    private  String firstName;
    private  String lastName;
    private  String email;
    private  String mobileNumber;
    private  String dob;
    private  String gender;
    private  String domain;
//    private  String address;
    private  String state;
    private  String city;

    public Employee() {

    }

    public Employee(UUID id,
                    String firstName,
                    String lastName,
                    String email,
                    String mobileNumber,
                    String dob,
                    String gender,
                    String domain,
//                    String address,
                    String state,
                    String city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.dob = dob;
        this.gender = gender;
        this.domain = domain;
//        this.address = address;
        this.state = state;
        this.city = city;
        this.id = id;
    }


    public Employee(String firstName,
                    String lastName,
                    String email,
                    String mobileNumber,
                    String dob,
                    String gender,
                    String domain,
//                    String address,
                    String state,
                    String city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.dob = dob;
        this.gender = gender;
        this.domain = domain;
//        this.address = address;
        this.state = state;
        this.city = city;
        this.id = UUID.randomUUID();
    }


    // create copy of current Employee
    public Employee createCopy() {
        Employee copyEmp = new Employee(
                this.getId(),
                this.getFirstName(),
                this.getLastName(),
                this.getEmail(),
                this.getMobileNumber(),
                this.getDob(),
                this.getGender(),
                this.getDomain(),
//                this.getAddress(),
                this.getState(),
                this.getCity()
        );
        return copyEmp;
    }


}
