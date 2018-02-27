import axios from 'axios';
import helpers from './helpers';
import airbase from '../airbase/schema';
import {database} from '../components/firebase';

const requests = {
    getTableContent: function(tableName) {
        let viewId = helpers.getTableViewId(tableName);
        let url = `https://api.airtable.com/v0/${airbase.baseId}/${tableName}?maxRecords=${airbase.maxRecords}&view=${viewId}&api_key=${airbase.apiKey}`;

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