// Array to store registered student details
const registeredStudents = [];

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form inputs
    const studentName = document.getElementById('studentName').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const department = document.getElementById('department').value;
    const hallName = document.getElementById('hallName').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Add the student details to the array
    const studentDetails = {
        name: studentName,
        rollNumber: rollNumber,
        email: email,
        phoneNumber: phoneNumber,
        department: department,
        hallName: hallName,
        date: date,
        time: time
    };
    registeredStudents.push(studentDetails);

    // Update the booking status
    updateBookingStatus();

    // Reset the form after submission
    document.getElementById('bookingForm').reset();
});

// Function to update the booking status section
function updateBookingStatus() {
    const statusList = document.getElementById('statusList');
    statusList.innerHTML = ''; // Clear the current list

    // Loop through the registeredStudents array and display each entry
    registeredStudents.forEach((student, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Student ${index + 1}:</strong><br>
            Name: ${student.name}<br>
            Roll Number: ${student.rollNumber}<br>
            Email: ${student.email}<br>
            Phone: ${student.phoneNumber}<br>
            Department: ${student.department}<br>
            Hall Name: ${student.hallName}<br>
            Date: ${student.date}<br>
            Time: ${student.time}<br><hr>
        `;
        statusList.appendChild(listItem);
    });
}


