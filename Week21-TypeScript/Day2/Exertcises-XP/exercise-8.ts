const getAction = (role: string): string => {
    switch (role) {
        case 'admin':
        case 'superadmin': // multiple roles
            return 'Manage users and settings';
        case 'editor':
        case 'author': // multiple roles
            return 'Edit content';
        case 'viewer':
        case 'reader':
            return 'View content';
        case 'guest':
            return 'Limited access';
        default:
            return 'Invalid role';
    }
};

console.log(getAction("admin"));      // Manage users and settings
console.log(getAction("superadmin")); // Manage users and settings
console.log(getAction("author"));     // Edit content
console.log(getAction("reader"));     // View content
console.log(getAction("guest"));      // Limited access
console.log(getAction("unknown"));    // Invalid role