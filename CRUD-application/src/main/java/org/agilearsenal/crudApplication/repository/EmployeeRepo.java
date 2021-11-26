package org.agilearsenal.crudApplication.repository;
import org.agilearsenal.crudApplication.models.Employee;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Repository
public class EmployeeRepo {


    private final List<Employee> db = new ArrayList<>(); ;

    public EmployeeRepo() {

    }

    public Employee createNewEmployee(Employee employee) {
        Employee emp = new Employee(
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail(),
                employee.getMobileNumber(),
                employee.getDob(),
                employee.getGender(),
                employee.getDomain(),
//                employee.getAddress(),
                employee.getState(),
                employee.getCity()
        );

        db.add(emp);
        return emp;
    }

    public Employee updateExistingEmployee(UUID empID, Employee updatedEmp) {

        if (empDoesNotExists(empID)) return null;


        Employee newEmp = new Employee(
                empID,
                updatedEmp.getFirstName(),
                updatedEmp.getLastName(),
                updatedEmp.getEmail(),
                updatedEmp.getMobileNumber(),
                updatedEmp.getDob(),
                updatedEmp.getGender(),
                updatedEmp.getDomain(),
//                updatedEmp.getAddress(),
                updatedEmp.getState(),
                updatedEmp.getCity()
        );

        for (int i = 0; i < db.size(); i++) {
            if (db.get(i).getId().equals(empID)) {
                db.remove(i);
                db.add(i,newEmp);
            }
        }

        return newEmp;
    }

    private boolean empDoesNotExists(UUID empID) {
        List<Employee> filteredList = db.stream()
                .filter(data -> data.getId().equals(empID))
                .collect(Collectors.toList());

        if (filteredList.size() == 0) {
            System.out.println("Employee doesn't exists.");
            return true;
        }

        if (filteredList.size() > 1) {
            throw new IllegalStateException("Duplicate data exists...");
        }
        return false;
    }

    public Employee deleteByID(UUID empID) {

        if (empDoesNotExists(empID)) return null;

        // we are sure that db contains only one recorde matching with provided empID
        Employee deletedEmp = null;

        for (var i = 0; i < db.size(); i++) {

            if (db.get(i).getId().equals(empID)) {
                deletedEmp = db.remove(i);
                break;
            }
        }

        return deletedEmp;
    }

    public List<Employee> getAllEmployees() {
        List<Employee> returnedList = new ArrayList<>();

        db.forEach(emp -> returnedList.add(emp.createCopy()));
        return returnedList;
    }

    public Employee getEmpByEmail(String newEmail) {
        long empCountWithNewEmail = db.stream()
                .filter(emp -> emp.getEmail().equals(newEmail))
                .count();

        if (empCountWithNewEmail == 1) {
            return db.stream()
                    .filter(emp -> emp.getEmail().equals(newEmail))
                    .collect(Collectors.toList())
                    .get(0)
                    .createCopy();
        }

        if (empCountWithNewEmail > 1) {
            throw new IllegalStateException("More than one employee with same email ID");
        }

        return null;

    }

    public Employee getEmpBy(Predicate<Employee> testCondition) {

        long empCountWithNewEmail = db.stream()
                .filter(testCondition::test)
                .count();

        if (empCountWithNewEmail == 1) {
            return db.stream()
                    .filter(testCondition::test)
                    .collect(Collectors.toList())
                    .get(0)
                    .createCopy();
        }

        if (empCountWithNewEmail > 1) {
            throw new IllegalStateException("More than one employee with same email ID");
        }
        return null;
    }
}
