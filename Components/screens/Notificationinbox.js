import React, { useState, useEffect } from 'react';
import { getNotificationInbox } from 'native-notify';
import { View ,Text,styles} from 'react-native';
export default function NotificationInbox() {
    const [data, setData] = useState([]);
     useEffect(async () => {
          let notifications = await getNotificationInbox(6289, 'ZwebBACUEUS05dfL9QSR8G');
          console.log("notifications: ", notifications);
          setData(notifications);
     }, []);
     return(
        <View styles={{justisfyContent:'center',flex:1}}>
            <Text>
            notification will appear here

        </Text>
        </View>
     )
};
