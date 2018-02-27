import axios from 'axios';
import helpers from './helpers';
import airbase from '../airbase/schema';
import {database} from '../components/firebase';

//const config = airtableConfig;

//const url = `https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}&api_key=${config.apiKey}`;

const requests = {
    getTableContent: function(tableId) {
        let viewId = helpers.getTableViewId(tableId);
        let url = `https://api.airtable.com/v0/${airbase.baseId}/${tableId}?maxRecords=${airbase.maxRecords}&view=${viewId}&api_key=${airbase.apiKey}`;

        return axios.get(url);
    },
    getUserAirbaseInfo: function(userId) {
        return database.ref('Users/' + userId).once('value');
    },

    sendTableContent: function(tableId, data) {
        return database.ref('Tables/' + tableId).set(data);
    },
    sendUserData: function(userId, data) {
        return database.ref('Users/' + userId).set(data);
    }
};

export default requests;