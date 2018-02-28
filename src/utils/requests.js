import axios from 'axios';
import {database} from '../components/firebase';

const requests = {
    getAirtableContent: function(tableName) {
        const airbaseInfo = JSON.parse(localStorage.getItem("airbaseInfo"));
        let url = `https://api.airtable.com/v0/${airbaseInfo.baseId}/${tableName}?api_key=${airbaseInfo.apiKey}`;

        return axios.get(url);
    },
    getUserAirbaseInfo: function(userId) {
        return database.ref('Users/' + userId).once('value');
    },
    sendTableContent: function(tableName, data) {
        return database.ref('Tables/' + tableName).set(data);
    },
    sendUserData: function(userId, data) {
        return database.ref('Users/' + userId).set(data);
    }
};

export default requests;