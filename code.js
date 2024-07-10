// Base Class for Residence
class Residence {
    /**
     * Creates a residence with a name, address, and occupancy status.
     * @param {string} name - The name of the residence.
     * @param {string} address - The address of the residence.
     */
    constructor(name, address) {
        this.name = name;
        this.address = address;
        this.isOccupied = false;
    }

    /**
     * Marks the residence as occupied.
     */
    occupy() {
        this.isOccupied = true;
    }

    /**
     * Marks the residence as vacant.
     */
    vacate() {
        this.isOccupied = false;
    }
}

// Subclass for DormRoom
class DormRoom extends Residence {
    /**
     * Creates a dorm room with a name, address, and size.
     * @param {string} name - The name of the dorm room.
     * @param {string} address - The address of the dorm room.
     * @param {number} size - The size of the dorm room in square footage.
     */
    constructor(name, address, size) {
        super(name, address);
        this.size = size; // in square footage
    }

    /**
     * Calculates the monthly rent for the dorm room.
     * @returns {number} The calculated rent.
     */
    calculateRent() {
        return this.size * 10; // Example rent calculation
    }
}

// Subclass for Apartment
class Apartment extends Residence {
    /**
     * Creates an apartment with a name, address, and number of bedrooms.
     * @param {string} name - The name of the apartment.
     * @param {string} address - The address of the apartment.
     * @param {number} numberOfBedrooms - The number of bedrooms in the apartment.
     */
    constructor(name, address, numberOfBedrooms) {
        super(name, address);
        this.numberOfBedrooms = numberOfBedrooms;
    }

    /**
     * Calculates the monthly rent for the apartment.
     * @returns {number} The calculated rent.
     */
    calculateRent() {
        return this.numberOfBedrooms * 300; // Example rent calculation
    }
}

// Student Class
class Student {
    /**
     * Creates a student with a name, student ID, gender, and assigned residence.
     * @param {string} name - The name of the student.
     * @param {string} studentID - The ID of the student.
     * @param {string} gender - The gender of the student.
     * @param {Residence|null} residence - The residence assigned to the student.
     */
    constructor(name, studentID, gender, residence = null) {
        this.name = name;
        this.studentID = studentID;
        this.gender = gender;
        this.residence = residence;
    }

    /**
     * Assigns a residence to the student and marks the residence as occupied.
     * @param {Residence} residence - The residence to assign.
     */
    assignResidence(residence) {
        this.residence = residence;
        residence.occupy();
    }

    /**
     * Vacates the residence assigned to the student and marks it as vacant.
     */
    vacateResidence() {
        if (this.residence) {
            this.residence.vacate();
            this.residence = null;
        }
    }
}

// MaintenanceRequest Class
class MaintenanceRequest {
    /**
     * Creates a maintenance request with a description, status, submitting student, and assigned employee.
     * @param {string} description - The description of the maintenance request.
     * @param {Student} student - The student who submitted the request.
     */
    constructor(description, student) {
        this.description = description;
        this.status = 'submitted';
        this.student = student;
        this.assignedEmployee = null;
    }

    /**
     * Assigns an employee to the maintenance request.
     * @param {string} employee - The name of the employee.
     */
    assignEmployee(employee) {
        this.assignedEmployee = employee;
    }

    /**
     * Updates the status of the maintenance request.
     * @param {string} newStatus - The new status of the request.
     */
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

// Demonstration of functionalities

// Creating Residences
const dorm1 = new DormRoom('Dorm A', '123 University St', 200);
const apt1 = new Apartment('Apartment B', '456 College Ave', 3);

// Creating Students
const student1 = new Student('Alice', 'S1001', 'Female');
const student2 = new Student('Bob', 'S1002', 'Male');

// Assigning Residences to Students
student1.assignResidence(dorm1);
student2.assignResidence(apt1);

// Logging Rent Calculation
console.log(`${student1.name}'s rent is $${dorm1.calculateRent()}`);
console.log(`${student2.name}'s rent is $${apt1.calculateRent()}`);

// Creating Maintenance Requests
const maintenance1 = new MaintenanceRequest('Leaky faucet', student1);
const maintenance2 = new MaintenanceRequest('Broken window', student2);

// Assigning Employee to Maintenance Request
maintenance1.assignEmployee('Maintenance Guy');
maintenance1.updateStatus('in progress');

// Logging Maintenance Requests
console.log(maintenance1);
console.log(maintenance2);
