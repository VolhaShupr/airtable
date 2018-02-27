import airbase from '../airbase/schema';

const helpers = {
    getTableViewId: function(tableName) {
        let tables = airbase.tables;

        for (let i=0; i<tables.length; i++) {
            if (tables[i].name === tableName) {
                return tables[i].viewId;
            }
        }
    },
};

export default helpers;