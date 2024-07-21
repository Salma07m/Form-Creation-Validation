document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        // Define API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the data container
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const users = await response.json();

            // Clear loading message
            dataContainer.innerHTML = '';

            // Create user list
            const userList = document.createElement('ul');
            userList.classList.add('user-list');

            // Populate user list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append user list to data container
            dataContainer.appendChild(userList);
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Display error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call fetchUserData on DOMContentLoaded
    fetchUserData();
});
