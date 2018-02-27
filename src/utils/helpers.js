import airbase from '../airbase/schema';

const helpers = {
    getTableViewId: function(tableId) {
        let tables = airbase.tables;

        for (let i=0; i<tables.length; i++) {
            if (tables[i].id === tableId) {
                return tables[i].viewId;
            }
        }
    },
    getTableName: function(tableId) {
        let tables = airbase.tables;

        for (let i=0; i<tables.length; i++) {
            if (tables[i].id === tableId) {
                return tables[i].name;
            }
        }
    }
};

export default helpers;