import apiInstance from "./axiosInstance";

export const fetchVehicles = async () => {
    const response = await apiInstance.get("/vehicles");
    return response.data;
}

export const addVehicle = async (vehicle) => {
    const response = await apiInstance.post("/vehicles", vehicle);
    return response.data;
}

export const availableVehicles = async (params) => {
    const response = await apiInstance.get("/vehicles/available", { params });
    return response.data;
}