import { createContext } from "react";

interface LatLng {
    lat: number;
    lng: number;
}
interface landPlotContextType {
    polygon: LatLng[];
    setPolygon: (plotValue: LatLng[]) => void;
}
export const landPlotContext = createContext<landPlotContextType>({
    polygon: [],
    setPolygon: () => { }
});