export const appointmentSearchableFields = ["name", "email", "phone"];
export const appointmentFilterableFields = ["status"];
export type AppointmentFilter = { search?: string; status?: string };
