export const appointmentSearchableFields = ["name", "email", "phone"];
export const appointmentFilterableFields = ["status", "appointmentDate"];
export type AppointmentFilter = { search?: string; status?: string; appointmentDate?: string };
