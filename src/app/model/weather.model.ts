export interface WeatherInputModel {
    latitude: number,
    longitude: number,
    hourly: string,
    startDate?: Date,
    endDate?: Date,
}