// Base class for all residences
class Residence {
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.occupied = false; // Default to not occupied
    }
}

// Class for dorm rooms
class DormRoom extends Residence {
    constructor(name, address, size) {
        super(name, address);
        this.size = size; // Size in square footage
    }
}

// Class for apartments
class Apartment extends Residence {
    constructor(name, address, numBedrooms) {
        super(name, address);
        this.numBedrooms = numBedrooms; // Number of bedrooms
    }
}

// Class for students
class Student {
    constructor(name, studentId, gender) {
        this.name = name;
        this.studentId = studentId;
        this.gender = gender;
        this.residence = null; // Initially not assigned to any residence
    }

    assignResidence(residence) {
        this.residence = residence;
        residence.occupied = true;
    }
}

// Class for maintenance requests
class MaintenanceRequest {
    constructor(description, student) {
        this.description = description;
        this.status = 'submitted'; // Default status
        this.student = student;
        this.assignedEmployee = null;
    }

    assignEmployee(employee) {
        this.assignedEmployee = employee;
        this.status = 'in progress';
    }

    completeRequest() {
        this.status = 'completed';
    }
}