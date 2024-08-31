// Function to load options into the dropdowns
function populateSelectOptions() {
    // Populate Role dropdown
    let roleSelect = document.getElementById('role');
    let roles = JSON.parse(localStorage.getItem('roles')) || [];
    roleSelect.innerHTML = '';
    roles.forEach(role => {
        let option = document.createElement('option');
        option.value = role.roleID;
        option.textContent = role.roleName;
        roleSelect.appendChild(option);
    });

    // Populate District dropdown
    let districtSelect = document.getElementById('district');
    let districts = JSON.parse(localStorage.getItem('districts')) || [];
    districtSelect.innerHTML = '';
    districts.forEach(district => {
        let option = document.createElement('option');
        option.value = district.districtID;
        option.textContent = district.districtName;
        districtSelect.appendChild(option);
    });
}

// Handle User form submission
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let roleID = document.getElementById('role').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userID = users.length + 1;
    users.push({ userID, username, password, email, roleID });

    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('userForm').reset();
});

// Handle Role form submission
document.getElementById('roleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let roleName = document.getElementById('roleName').value;
    let roles = JSON.parse(localStorage.getItem('roles')) || [];
    let roleID = roles.length + 1;
    roles.push({ roleID, roleName });

    localStorage.setItem('roles', JSON.stringify(roles));
    document.getElementById('roleForm').reset();
    populateSelectOptions();  // Update the role dropdown
});

// Handle Hospital form submission
document.getElementById('hospitalForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let hospitalName = document.getElementById('hospitalName').value;
    let address = document.getElementById('address').value;
    let contactInfo = document.getElementById('contactInfo').value;
    let districtID = document.getElementById('district').value;

    let hospitals = JSON.parse(localStorage.getItem('hospitals')) || [];
    let hospitalID = hospitals.length + 1;
    hospitals.push({ hospitalID, hospitalName, address, contactInfo, districtID });

    localStorage.setItem('hospitals', JSON.stringify(hospitals));
    document.getEleme
