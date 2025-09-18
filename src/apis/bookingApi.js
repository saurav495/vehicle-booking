import apiInstance from "./axiosInstance";

export const addBooking = async (booking) => {
    const response = await apiInstance.post("/bookings", booking);
    return response.data;
}