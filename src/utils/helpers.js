import airtables from '../airbase/schema';

const helpers = {
    getTableViewId: function(tableId) {
        let tables = airtables;

        for (let i=0; i<tables.length; i++) {
            if (tables[i].id === tableId) {
                return tables[i].defaultView.id;
            }
        }
    },
    getTableName: function(tableId) {
        let tables = airtables;

        for (let i=0; i<tables.length; i++) {
            if (tables[i].id === tableId) {
                return tables[i].name;
            }
        }
    }
};

export default helpers;