// Base class for all residences
class Residence {
    /**
     * Creates a residence
     * @param {string} name - The name of the residence
     * @param {string} address - The address of the residence
     */
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.occupied = false; // Default to not occupied
    }
}

// Class for dorm rooms
class DormRoom extends Residence {
    /**
     * Creates a dorm room
     * @param {string} name - The name of the dorm room
     * @param {string} address - The address of the dorm room
     * @param {number} size - The size of the dorm room in square footage
     */
    constructor(name, address, size) {
        super(name, address);
        this.size = size; // Size in square footage
    }
}

// Class for apartments
class Apartment extends Residence {
    /**
     * Creates an apartment
     * @param {string} name - The name of the apartment
     * @param {string} address - The address of the apartment
     * @param {number} numBedrooms - The number of bedrooms in the apartment
     */
    constructor(name, address, numBedrooms) {
        super(name, address);
        this.numBedrooms = numBedrooms; // Number of bedrooms
    }
}

// Class for students
class Student {
    /**
     * Creates a student
     * @param {string} name - The name of the student
     * @param {string} studentId - The student ID
     * @param {string} gender - The gender of the student
     */
    constructor(name, studentId, gender) {
        this.name = name;
        this.studentId = studentId;
        this.gender = gender;
        this.residence = null; // Initially not assigned to any residence
    }

    /**
     * Assigns a residence to the student
     * @param {Residence} residence - The residence to assign
     */
    assignResidence(residence) {
        this.residence = residence;
        residence.occupied = true;
    }
}

// Class for maintenance requests
class MaintenanceRequest {
    /**
     * Creates a maintenance request
     * @param {string} description - The description of the maintenance request
     * @param {Student} student - The student who submitted the request
     */
    constructor(description, student) {
        this.description = description;
        this.status = 'submitted'; // Default status
        this.student = student;
        this.assignedEmployee = null;
    }

    /**
     * Assigns an employee to the maintenance request
     * @param {string} employee - The employee assigned to the request
     */
    assignEmployee(employee) {
        this.assignedEmployee = employee;
        this.status = 'in progress';
    }

    /**
     * Marks the maintenance request as completed
     */
    completeRequest() {
        this.status = 'completed';
    }
}