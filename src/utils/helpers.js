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
    getDbTablesName: function(tables) {
        let tablesName = [];
        for (name in tables) {
            tablesName.push(name)
        }
        return tablesName;
    },
    getAirtablesName: function(tables) {
        return tables.map(function(table) {
            return table.name;
        })
    }
};

export default helpers;