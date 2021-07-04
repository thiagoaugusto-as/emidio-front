import AuthContext, { useAuth } from "../contexts/auth";
import { UserDTO } from "./Dtos/systemDtos";
import { api } from "./api";
import { ITaskResponse } from "./responses/systemResponses";
import { useContext } from "react";

export async function getTasks(class_id: string): Promise<ITaskResponse[] | undefined> {
      
    try {
        const response = await api.get('/tasks/find', {
            params: {
                class_id
            },
        });
        return response.data;
    } catch (error) {
        return undefined;
    }    

}