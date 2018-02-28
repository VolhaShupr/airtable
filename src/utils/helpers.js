const helpers = {
    getDbTablesName: function(tables) {
        let tablesName = [];
        for (name in tables) {
            tablesName.push(name)
        }
        return tablesName;
    }
};

export default helpers;