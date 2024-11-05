import { atom, selector } from "recoil";
import axios from "axios";

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkSelector",
        get : async () => {
            const res = await axios.get("http://localhost:3000/api/data");
            console.log("res data", res.data);
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.networks + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messaging
    }
})