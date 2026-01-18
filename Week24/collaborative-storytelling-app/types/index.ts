// User type
export interface User {
    id: number,
    username: string,
    email: string,
    password_hash?: string,
    created_at?: Date
}

// Story type
export interface Story {
    id: number,
    title: string,
    content: string,
    author_id: number,
    author?: User,
    created_at: Date,
    updated_at?: Date,
}

// Contributor type
export interface Contributor {
    id: number,
    story_id: number,
    user_id: number,
    user?: User,
    added_at?: Date
}

// Auth types
export interface LoginCredentials {
    email: string,
    password: string
}

export interface RegisterData {
    username: string,
    email: string,
    password: string,
}

export interface AuthResponse {
    accessToken: string,
    user: Omit<User, 'password_hash'>
}