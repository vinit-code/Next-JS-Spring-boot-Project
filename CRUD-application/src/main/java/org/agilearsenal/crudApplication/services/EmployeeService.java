package org.agilearsenal.crudApplication.services;

import org.agilearsenal.crudApplication.models.Employee;
import org.agilearsenal.crudApplication.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    public EmployeeService(@Autowired EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    public Employee createEmployee(Employee employee) {

//        Employee existingEmpWithSameEmail = employeeRepo.getEmpByEmail(employee.getEmail());
        Employee existingEmpWithSameEmail = employeeRepo.getEmpBy(emp -> emp.getEmail().equals(employee.getEmail()));

//        System.out.println(existingEmpWithSameEmail);

        if (existingEmpWithSameEmail != null) {
            return null;
        }

        return employeeRepo.createNewEmployee(employee);
    }

    public Employee updateEmployee(UUID empID, Employee updatedEmp) {
        return employeeRepo.updateExistingEmployee(empID,updatedEmp);
    }

    public Employee delete(UUID empID) {
        return employeeRepo.deleteByID(empID);
    }

    public List<Employee> getAll() {
        return employeeRepo.getAllEmployees();
    }

    public Employee getEmpById(UUID id) {
        return employeeRepo.getEmpBy(emp -> emp.getId().equals(id));
    }
}
