export interface UserDTO {
    user: {
        id: string;
        name: string;
        username: string;
        isProfessor: boolean;
        className: string;
        classLevel: string;
        classId: string;
    };
    token: string;
}