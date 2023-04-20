import migrate from 'mongo-to-postgres';

// Migration step (From MongoDB to PostgresSQL)
// 1. Create postgres tables accordingly (prisma migration or below code)
// 2. Modify the post-to-postgres.js as shown below
// 3. Run the migration

/**
 // Below is table creation code
CREATE TABLE "announcement" (
  "id" VARCHAR(512) NOT NULL,
  "title" VARCHAR(512) NULL DEFAULT NULL,
  "content" VARCHAR(2048) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "creator" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "announcements" (
  "id" VARCHAR(512) NOT NULL,
  "title" VARCHAR(512) NULL DEFAULT NULL,
  "content" VARCHAR(2048) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "creator" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "emailverifications" (
  "id" VARCHAR(512) NOT NULL,
  "verified" BOOLEAN NULL DEFAULT NULL,
  "userId" VARCHAR(512) NULL DEFAULT NULL,
  "email" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "dateVerified" TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "events" (
  "id" VARCHAR(512) NOT NULL,
  "type" VARCHAR(512) NULL DEFAULT NULL,
  "route" VARCHAR(512) NULL DEFAULT NULL,
  "message" VARCHAR(512) NULL DEFAULT NULL,
  "links" JSON NULL DEFAULT NULL,
  "date" TIMESTAMP NULL DEFAULT NULL,
  "data" JSON NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "filebinaries" (
  "id" VARCHAR(512) NOT NULL,
  "md5" VARCHAR(512) NULL DEFAULT NULL,
  "buffer" BYTEA NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "files" (
  "id" VARCHAR(512) NOT NULL,
  "name" VARCHAR(512) NULL DEFAULT NULL,
  "size" INTEGER NULL DEFAULT NULL,
  "mimetype" VARCHAR(512) NULL DEFAULT NULL,
  "data" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "url" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "multifactorverifications" (
  "id" VARCHAR(512) NOT NULL,
  "userId" VARCHAR(512) NULL DEFAULT NULL,
  "code" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "organisationinvitations" (
  "id" VARCHAR(512) NOT NULL,
  "accepted" BOOLEAN NULL DEFAULT NULL,
  "organisation" VARCHAR(512) NULL DEFAULT NULL,
  "email" VARCHAR(512) NULL DEFAULT NULL,
  "inviter" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "rejected" BOOLEAN NULL DEFAULT NULL,
  "dateAccepted" TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "organisationmembers" (
  "id" VARCHAR(512) NOT NULL,
  "services" JSON NULL DEFAULT NULL,
  "isActive" BOOLEAN NULL DEFAULT NULL,
  "isOrgManager" BOOLEAN NULL DEFAULT NULL,
  "user" VARCHAR(512) NULL DEFAULT NULL,
  "organisation" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "notifications" JSON NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "organisations" (
  "id" VARCHAR(512) NOT NULL,
  "services" JSON NULL DEFAULT NULL,
  "billing" JSON NULL DEFAULT NULL,
  "partnerCode" VARCHAR(512) NULL DEFAULT NULL,
  "name" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "supportPlans" VARCHAR(512) NULL DEFAULT NULL,
  "address" VARCHAR(512) NULL DEFAULT NULL,
  "phone" VARCHAR(512) NULL DEFAULT NULL,
  "website" VARCHAR(512) NULL DEFAULT NULL,
  "userCap" INTEGER NULL DEFAULT NULL,
  "logo" VARCHAR(512) NULL DEFAULT NULL,
  "bokDate" TIMESTAMP NULL DEFAULT NULL,
  "offlineDate" TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "sessions" (
  "id" VARCHAR(512) NOT NULL,
  "userId" VARCHAR(512) NULL DEFAULT NULL,
  "source" VARCHAR(512) NULL DEFAULT NULL,
  "token" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "expiry" TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "supporttickets" (
  "id" VARCHAR(512) NOT NULL,
  "status" VARCHAR(512) NULL DEFAULT NULL,
  "title" VARCHAR(512) NULL DEFAULT NULL,
  "relevantApp" VARCHAR(512) NULL DEFAULT NULL,
  "severity" VARCHAR(512) NULL DEFAULT NULL,
  "type" VARCHAR(512) NULL DEFAULT NULL,
  "description" VARCHAR(8192) NULL DEFAULT NULL,
  "organisation" VARCHAR(512) NULL DEFAULT NULL,
  "dateOpened" TIMESTAMP NULL DEFAULT NULL,
  "comments" JSON NULL DEFAULT NULL,
  "timelogs" JSON NULL DEFAULT NULL,
  "reporter" VARCHAR(512) NULL DEFAULT NULL,
  "support" VARCHAR(512) NULL DEFAULT NULL,
  "attachments" JSON NULL DEFAULT NULL,
  "billable" VARCHAR(512) NULL DEFAULT NULL,
  "ticketNumber" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "teams" (
  "id" VARCHAR(512) NOT NULL,
  "isEnabled" BOOLEAN NULL DEFAULT NULL,
  "name" VARCHAR(512) NULL DEFAULT NULL,
  "description" VARCHAR(512) NULL DEFAULT NULL,
  "colour" VARCHAR(512) NULL DEFAULT NULL,
  "service" VARCHAR(512) NULL DEFAULT NULL,
  "organisation" VARCHAR(512) NULL DEFAULT NULL,
  "members" JSON NULL DEFAULT NULL,
  "managers" JSON NULL DEFAULT NULL,
  "option" JSON NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "savedDashboards" JSON NULL DEFAULT NULL,
  "inspectionKeyClients" JSON NULL DEFAULT NULL,
  "inspectionKeyOrganisations" JSON NULL DEFAULT NULL,
  "responsibleParties" JSON NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "useradmins" (
  "id" VARCHAR(512) NOT NULL,
  "services" JSON NULL DEFAULT NULL,
  "settings" JSON NULL DEFAULT NULL,
  "emailVerified" BOOLEAN NULL DEFAULT NULL,
  "role" VARCHAR(512) NULL DEFAULT NULL,
  "phoneNumber" VARCHAR(512) NULL DEFAULT NULL,
  "jobTitle" VARCHAR(512) NULL DEFAULT NULL,
  "email" VARCHAR(512) NULL DEFAULT NULL,
  "name" VARCHAR(512) NULL DEFAULT NULL,
  "password" VARCHAR(512) NULL DEFAULT NULL,
  "hash" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "notifications" JSON NULL DEFAULT NULL,
  "lastActive" TIMESTAMP NULL DEFAULT NULL,
  "upviseAccounts" JSON NULL DEFAULT NULL,
  "resetPasswordExpires" TIMESTAMP NULL DEFAULT NULL,
  "resetPasswordToken" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
CREATE TABLE "users" (
  "id" VARCHAR(512) NOT NULL,
  "settings" JSON NULL DEFAULT NULL,
  "role" VARCHAR(512) NULL DEFAULT NULL,
  "phoneNumber" VARCHAR(512) NULL DEFAULT NULL,
  "jobTitle" VARCHAR(512) NULL DEFAULT NULL,
  "email" VARCHAR(512) NULL DEFAULT NULL,
  "name" VARCHAR(512) NULL DEFAULT NULL,
  "password" VARCHAR(512) NULL DEFAULT NULL,
  "dateCreated" TIMESTAMP NULL DEFAULT NULL,
  "upviseAccounts" JSON NULL DEFAULT NULL,
  "lastActive" TIMESTAMP NULL DEFAULT NULL,
  "emailVerified" BOOLEAN NULL DEFAULT NULL,
  "notifications" JSON NULL DEFAULT NULL,
  "services" JSON NULL DEFAULT NULL,
  "resetPasswordExpires" TIMESTAMP NULL DEFAULT NULL,
  "resetPasswordToken" VARCHAR(512) NULL DEFAULT NULL,
  "hash" VARCHAR(512) NULL DEFAULT NULL,
  PRIMARY KEY ("id")
);
**/

/**   
    // Replace the file content \node_modules\mongo-to-postgres\src\put-to-postgres.js using below custom code for Sanspaper hub
    
     // Insert data to destination table
     // @param {object} kenx - knex object
     // @param {Array} collections - Array of collections
     // @param {string} tableName - Table name
     // @param {string} rows - Objects to insert
     // @return {Array} Ids map
     
  export default async ({ knex, collections, tableName, rows }) => {
    const { foreignKeys, fieldsRename, fieldsRedefine, links } =
      collections.find(c => c.tableName === tableName);
  
    const idsMap = []; // array for identifiers maps
    for (const currentRow of rows) {
      // rename fields (if necessary)
      if (fieldsRename) {
        for (const value of Object.values(fieldsRename)) {
          if (value[1]) {
            currentRow[value[1]] = currentRow[value[0]];
          }
          delete currentRow[value[0]];
        }
      }
  
      // redefine attributes
      if (fieldsRedefine) {
        for (const field of fieldsRedefine) {
          currentRow[field[0]] = field[1];
        }
      }
  
      // map foreign keys
      if (foreignKeys) {
        for (const [fieldName, collectionName] of Object.entries(foreignKeys)) {
          const foreignCollection = collections.find(c => c.collectionName === collectionName);
          const maps = foreignCollection.idsMap;
          if (!Array.isArray(currentRow[fieldName])) {
            const mapedField = maps
              .find(x => x.oldId === (currentRow[fieldName] ? currentRow[fieldName].toString() : null));
            currentRow[fieldName] = mapedField
              ? currentRow[fieldName] = mapedField.newId
              : currentRow[fieldName] = null;
          }
        }
      }
  
      // save and then delete Mongo _id
      const oldId = currentRow._id.toString();
      //delete currentRow._id;
  
      // check arrays from row object
      var rowCopy = JSON.parse(JSON.stringify(currentRow));
      for (const fieldName of Object.keys(rowCopy)) {
  
        // Fix for array of objects
        if (Array.isArray(rowCopy[fieldName])) {
          //delete rowCopy[fieldName];
          if (rowCopy[fieldName].length > 0) {
            var dummyData = [];
            for (var oobj of rowCopy[fieldName]) {
              dummyData.push(oobj);
            }
            //console.debug(JSON.stringify(dummyData));
  
            rowCopy[fieldName] = JSON.stringify(dummyData);
          } else {
            var dummyData = [];
            rowCopy[fieldName] = JSON.stringify(dummyData);
          }
        }
  
        // Fix for date is in linux timestamp
        if (fieldName == 'lastActive' || fieldName == 'dateCreated' || fieldName == 'resetPasswordExpires') {
          if (Number.isInteger(rowCopy[fieldName])) {
            var date = new Date(rowCopy[fieldName]);
            rowCopy[fieldName] = date;
            console.debug(date);
          }
        }
      }
  
     // Move the value of MongoDB _id into Postgres id
     rowCopy['id'] = oldId;
  
     // Remove _id and __v because will cause error on Prisma schema
     delete rowCopy['_id'];
     delete rowCopy['__v'];
  
      // insert current row
      const newId = await knex(tableName)
        .returning('id')
        .insert(rowCopy);
  
      // save id mapping
      idsMap.push({ oldId, newId: newId[0] });
  
      // many-to-many links
      if (links) {
        for (const [fieldName, linksTableAttrs] of Object.entries(links)) {
          for (const relatedField of currentRow[fieldName]) {
            const foreignCollection = collections.find(c => c.collectionName === foreignKeys[fieldName]);
            let foreignKey;
            let linkRow = {};
            // if related field contains just ID
            if (relatedField.constructor.name === 'ObjectID') {
              foreignKey = relatedField.toString();
            } else {
            // or if it contains additional fields
              const func = linksTableAttrs[3];
              const res = func(linkRow, relatedField);
              foreignKey = res.foreignKey;
              linkRow = res.linkRow;
            }
            const map = foreignCollection.idsMap.find(x => x.oldId === foreignKey);
            linkRow[linksTableAttrs[1]] = newId[0];
            linkRow[linksTableAttrs[2]] = map.newId;
            await knex(linksTableAttrs[0]).insert(linkRow);
          }
        }
      }
      // next row
    }
  
    console.log(`Inserted ${rows.length} rows to "${tableName}" table`);
    return idsMap;
  };
  
**/


migrate({
  // Define connection strings
  connections: {
    mongo: 'mongodb://127.0.0.1:27017/sanspaper-hub',
    postgres: 'postgres://postgres:secret@localhost:5432/sanspaperhub_v2'
  },
  // Define your database migration settings
  collections: [
    {
      collectionName: 'users',       // collection name in Mongo
      tableName: 'users',           // table name in Postgres
    },
    {
      collectionName: 'user-admins',       // collection name in Mongo
      tableName: 'useradmins',           // table name in Postgres
    },
    {
      collectionName: 'organisations',       // collection name in Mongo
      tableName: 'organisations',           // table name in Postgres
    },
    {
      collectionName: 'teams',       // collection name in Mongo
      tableName: 'teams',           // table name in Postgres
    },
    {
      collectionName: 'organisationmembers',       // collection name in Mongo
      tableName: 'organisationmembers',           // table name in Postgres
    },
    {
      collectionName: 'organisationinvitations',       // collection name in Mongo
      tableName: 'organisationinvitations',           // table name in Postgres
    },
    {
      collectionName: 'announcements',       // collection name in Mongo
      tableName: 'announcements',           // table name in Postgres
    },
    {
      collectionName: 'announcement',       // collection name in Mongo
      tableName: 'announcement',           // table name in Postgres
    },
    {
      collectionName: 'emailverifications',       // collection name in Mongo
      tableName: 'emailverifications',           // table name in Postgres
    },
    {
      collectionName: 'events',       // collection name in Mongo
      tableName: 'events',           // table name in Postgres
    },
    {
      collectionName: 'filebinaries',       // collection name in Mongo
      tableName: 'filebinaries',           // table name in Postgres
    },
    {
      collectionName: 'files',       // collection name in Mongo
      tableName: 'files',           // table name in Postgres
    },
    {
      collectionName: 'multifactorverifications',       // collection name in Mongo
      tableName: 'multifactorverifications',           // table name in Postgres
    },
    {
      collectionName: 'sessions',       // collection name in Mongo
      tableName: 'sessions',           // table name in Postgres
    },
    {
      collectionName: 'supporttickets',       // collection name in Mongo
      tableName: 'supporttickets',           // table name in Postgres
    },
  ]

});