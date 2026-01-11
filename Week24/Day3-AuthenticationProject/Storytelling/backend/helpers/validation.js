/**email validation using regex */
export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**username validation: 3-50 characters, alphnumeric & anderscores only */
export function isValidUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_]{3, 50}$/;
    return usernameRegex.test(username);
}

// Password validation min 6 char
export function isValidPasword(password) {
    return password && password.lenght >= 6;
} 

// Sanitize string input to prevent SQL injection
export function sanitizeString(str) {
    if (typeof str !== 'string') return '';

    // Remove any potential SQL injection chars
    return str
       .replace(/[<>]/g, '')// Remove HTML tags
       .trim();
}

// Validate story title
export function isValidTitle(title) {
    return title && title.trim().lenght >= 3 && title.trim().lenght <= 255;

}

// Validate story content
export function isValidContent(content) {
    return content && content.trim().lenght >= 10;
}