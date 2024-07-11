/**
 * Base class for all types of residences.
 */
class Residence {
    /**
     * @param {string} name - The name of the residence.
     * @param {string} address - The address of the residence.
     * @param {boolean} isOccupied - Whether the residence is currently occupied.
     */
    constructor(name, address, isOccupied) {
        this.name = name;
        this.address = address;
        this.isOccupied = isOccupied;
    }
}

/**
 * Class representing a dorm room.
 * @extends Residence
 */
class DormRoom extends Residence {
    /**
     * @param {string} name - The name of the dorm room.
     * @param {string} address - The address of the dorm room.
     * @param {boolean} isOccupied - Whether the dorm room is currently occupied.
     * @param {number} size - The size of the dorm room in square footage.
     */
    constructor(name, address, isOccupied, size) {
        super(name, address, isOccupied);
        this.size = size;
    }

    /**
     * Calculate the rent based on the size of the dorm room.
     * @returns {number} - The calculated rent.
     */
    calculateRent() {
        return this.size * 10; // Example calculation
    }
}

/**
 * Class representing an apartment.
 * @extends Residence
 */
class Apartment extends Residence {
    /**
     * @param {string} name - The name of the apartment.
     * @param {string} address - The address of the apartment.
     * @param {boolean} isOccupied - Whether the apartment is currently occupied.
     * @param {number} numberOfBedrooms - The number of bedrooms in the apartment.
     */
    constructor(name, address, isOccupied, numberOfBedrooms) {
        super(name, address, isOccupied);
        this.numberOfBedrooms = numberOfBedrooms;
    }

    /**
     * Calculate the rent based on the number of bedrooms.
     * @returns {number} - The calculated rent.
     */
    calculateRent() {
        return this.numberOfBedrooms * 100; // Example calculation
    }
}

/**
 * Class representing a student.
 */
class Student {
    /**
     * @param {string} name - The name of the student.
     * @param {string} studentID - The student ID.
     * @param {string} gender - The gender of the student.
     * @param {Residence} residence - The residence assigned to the student (optional).
     */
    constructor(name, studentID, gender, residence = null) {
        this.name = name;
        this.studentID = studentID;
        this.gender = gender;
        this.residence = residence;
    }

    /**
     * Assign a residence to the student.
     * @param {Residence} residence - The residence to be assigned.
     */
    assignResidence(residence) {
        this.residence = residence;
        residence.isOccupied = true;
    }
}

/**
 * Class representing a maintenance request.
 */
class MaintenanceRequest {
    /**
     * @param {string} description - The description of the maintenance request.
     * @param {string} status - The current status of the request (e.g., "submitted", "in progress", "completed").
     * @param {Student} student - The student who submitted the request.
     * @param {string} assignedEmployee - The employee assigned to the request (optional).
     */
    constructor(description, status, student, assignedEmployee = null) {
        this.description = description;
        this.status = status;
        this.student = student;
        this.assignedEmployee = assignedEmployee;
    }

    /**
     * Assign an employee to the maintenance request.
     * @param {string} employee - The employee to be assigned.
     */
    assignEmployee(employee) {
        this.assignedEmployee = employee;
    }
}