// import { UserDTO } from "../Dtos/systemDtos";
// import { api } from "./api";
// interface InputLogin {
//     password: string;
//     username: string;
// }

// export async function getClass({ password, username }: InputLogin): Promise<UserDTO | undefined> {
//     try {
//         const response = await api.post('/sessions', {
//             username,
//             password
//         });
        
//         return response.data;
//     } catch (error) {
//         return undefined;
//     }    
// }