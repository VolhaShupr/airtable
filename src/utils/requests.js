import axios from 'axios';
import helpers from './helpers';
import {airtableConfig}  from '../config/config';
import {database} from '../components/firebase';

const config = airtableConfig;

//const url = `https://api.airtable.com/v0/${config.base}/${config.table}?maxRecords=${config.maxRecords}&view=${config.view}&api_key=${config.apiKey}`;

const requests = {
    getTableContent: function(tableId){
        let viewId = helpers.getTableViewId(tableId);
        let url = `https://api.airtable.com/v0/${config.base}/${tableId}?maxRecords=${config.maxRecords}&view=${viewId}&api_key=${config.apiKey}`;

        return axios.get(url);
    },
    sendTableContent: function(tableId, data) {
        return database.ref('Tables/' + tableId).set(data);
    }
};

export default requests;