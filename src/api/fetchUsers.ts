export const fetchUsers = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/users?limit=9');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};