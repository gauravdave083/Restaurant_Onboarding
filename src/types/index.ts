export interface RestaurantInfo {
     name: string;
     address: string;
     phone: string;
     cuisine: string;
     email: string;
   }
   
   export interface DayHours {
     open: string;
     close: string;
     closed: boolean;
   }
   
   export interface OperatingHours {
     [key: string]: DayHours;
   }
   
   export type RootStackParamList = {
     Welcome: undefined;
     BasicInfo: undefined;
     Photos: undefined;
     Hours: undefined;
     Menu: undefined;
     Confirmation: undefined;
   };
   
   export interface NavigationProps {
     navigation: {
       navigate: (screen: keyof RootStackParamList) => void;
     };
   }