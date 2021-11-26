package org.agilearsenal.crudApplication.controllers;

import org.agilearsenal.crudApplication.models.Employee;
import org.agilearsenal.crudApplication.services.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "/api/v1")
@ResponseBody
@CrossOrigin(origins = "http://localhost:3000")
public class HomeController {

    private final EmployeeService employeeService;

    public HomeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @RequestMapping(path = "/create", method = {RequestMethod.POST})
    private ResponseEntity<Employee> create(@RequestBody Employee employee) {
        Employee createdEmp = employeeService.createEmployee(employee);

        if (createdEmp == null)
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body(null);

        return ResponseEntity.status(HttpStatus.OK).body(createdEmp);
    }

    @RequestMapping(path = "/update/{empId}", method = {RequestMethod.GET})
    private ResponseEntity<Employee> empByID(@PathVariable UUID empId) {
        Employee existingEmp = employeeService.getEmpById(empId);

        if (existingEmp == null) {
            return ResponseEntity
                    .status(HttpStatus.NO_CONTENT)
                    .body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(existingEmp);

    }

    @RequestMapping(path = "/update/{empID}", method = {RequestMethod.PATCH})
    private Employee update(@PathVariable UUID empID, @RequestBody Employee updatedEmp) {
        return employeeService
                .updateEmployee(empID,updatedEmp);
    }

    @RequestMapping(path = "/delete/{empID}", method = RequestMethod.DELETE)
    private Employee delete(@PathVariable UUID empID) {
        return employeeService.delete(empID);
    }

    @RequestMapping(path = "/getAll", method = RequestMethod.GET)
    private List<Employee> getAll() {
        return employeeService.getAll();
    }


}
