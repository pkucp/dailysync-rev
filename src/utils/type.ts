const { GarminConnect: GarminConnect } = require('@gooin/garmin-connect');
const {IWorkoutDetail:IWorkoutDetail} = require('@gooin/garmin-connect')

export type GarminClientType = typeof GarminConnect
export type WktDetail = typeof IWorkoutDetail
