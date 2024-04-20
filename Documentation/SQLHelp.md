Command:     ABORT
Description: abort the current transaction
Syntax:
ABORT [ WORK | TRANSACTION ] [ AND [ NO ] CHAIN ]

URL: https://www.postgresql.org/docs/16/sql-abort.html

Command:     ALTER AGGREGATE
Description: change the definition of an aggregate function
Syntax:
ALTER AGGREGATE name ( aggregate_signature ) RENAME TO new_name
ALTER AGGREGATE name ( aggregate_signature )
                OWNER TO { new_owner | CURRENT_ROLE | CURRENT_USER | SESSION_USER }
ALTER AGGREGATE name ( aggregate_signature ) SET SCHEMA new_schema

where aggregate_signature is:

* 
|
# Available help:
  ABORT                            CREATE USER MAPPING
  ALTER AGGREGATE                  CREATE VIEW
  ALTER COLLATION                  DEALLOCATE
  ALTER CONVERSION                 DECLARE
  ALTER DATABASE                   DELETE  ALTER DEFAULT PRIVILEGES         DISCARD
  ALTER DOMAIN                     DO
  ALTER EVENT TRIGGER              DROP ACCESS METHOD
  ALTER EXTENSION                  DROP AGGREGATE
  ALTER FOREIGN DATA WRAPPER       DROP CAST
  ALTER FOREIGN TABLE              DROP COLLATION
  ALTER FUNCTION                   DROP CONVERSION
  ALTER GROUP                      DROP DATABASE
  ALTER INDEX                      DROP DOMAIN
  ALTER LANGUAGE                   DROP EVENT TRIGGER
  ALTER LARGE OBJECT               DROP EXTENSION
  ALTER MATERIALIZED VIEW          DROP FOREIGN DATA WRAPPER
  ALTER OPERATOR                   DROP FOREIGN TABLE
  ALTER OPERATOR CLASS             DROP FUNCTION
  ALTER OPERATOR FAMILY            DROP GROUP
  ALTER POLICY                     DROP INDEX
  ALTER PROCEDURE                  DROP LANGUAGE
  ALTER PUBLICATION                DROP MATERIALIZED VIEW
  ALTER ROLE                       DROP OPERATOR
  ALTER ROUTINE                    DROP OPERATOR CLASS
  ALTER RULE                       DROP OPERATOR FAMILY
  ALTER SCHEMA                     DROP OWNED
  ALTER SEQUENCE                   DROP POLICY
  ALTER SERVER                     DROP PROCEDURE
  ALTER STATISTICS                 DROP PUBLICATION
  ALTER SUBSCRIPTION               DROP ROLE
  ALTER SYSTEM                     DROP ROUTINE
  ALTER TABLE                      DROP RULE
  ALTER TABLESPACE                 DROP SCHEMA
  ALTER TEXT SEARCH CONFIGURATION  DROP SEQUENCE
  ALTER TEXT SEARCH DICTIONARY     DROP SERVER
  ALTER TEXT SEARCH PARSER         DROP STATISTICS
  ALTER TEXT SEARCH TEMPLATE       DROP SUBSCRIPTION
  ALTER TRIGGER                    DROP TABLE
  ALTER TYPE                       DROP TABLESPACE
  ALTER USER                       DROP TEXT SEARCH CONFIGURATION
  ALTER USER MAPPING               DROP TEXT SEARCH DICTIONARY
  ALTER VIEW                       DROP TEXT SEARCH PARSER
  ANALYZE                          DROP TEXT SEARCH TEMPLATE
  BEGIN                            DROP TRANSFORM
  CALL                             DROP TRIGGER
  CHECKPOINT                       DROP TYPE
  CLOSE                            DROP USER
  CLUSTER                          DROP USER MAPPING
  COMMENT                          DROP VIEW
  COMMIT                           END
  COMMIT PREPARED                  EXECUTE
  COPY                             EXPLAIN
  CREATE ACCESS METHOD             FETCH
  CREATE AGGREGATE                 GRANT
  CREATE CAST                      IMPORT FOREIGN SCHEMA
  CREATE COLLATION                 INSERT  CREATE CONVERSION                LISTEN  CREATE DATABASE                  LOAD
  CREATE DOMAIN                    LOCK
  CREATE EVENT TRIGGER             MERGE
  CREATE EXTENSION                 MOVE
  CREATE FOREIGN DATA WRAPPER      NOTIFY  CREATE FOREIGN TABLE             PREPARE
  CREATE FUNCTION                  PREPARE TRANSACTION
  CREATE GROUP                     REASSIGN OWNED
  CREATE INDEX                     REFRESH MATERIALIZED VIEW
  CREATE LANGUAGE                  REINDEX
  CREATE MATERIALIZED VIEW         RELEASE SAVEPOINT
  CREATE OPERATOR                  RESET
  CREATE OPERATOR CLASS            REVOKE  CREATE OPERATOR FAMILY           ROLLBACK
  CREATE POLICY                    ROLLBACK PREPARED
  CREATE PROCEDURE                 ROLLBACK TO SAVEPOINT
  CREATE PUBLICATION               SAVEPOINT
  CREATE ROLE                      SECURITY LABEL
  CREATE RULE                      SELECT  CREATE SCHEMA                    SELECT INTO
  CREATE SEQUENCE                  SET
  CREATE SERVER                    SET CONSTRAINTS
  CREATE STATISTICS                SET ROLE
  CREATE SUBSCRIPTION              SET SESSION AUTHORIZATION
  CREATE TABLE                     SET TRANSACTION
  CREATE TABLE AS                  SHOW
  CREATE TABLESPACE                START TRANSACTION
  CREATE TEXT SEARCH CONFIGURATION TABLE
  CREATE TEXT SEARCH DICTIONARY    TRUNCATE
  CREATE TEXT SEARCH PARSER        UNLISTEN
  CREATE TEXT SEARCH TEMPLATE      UPDATE  CREATE TRANSFORM                 VACUUM  CREATE TRIGGER                   VALUES  CREATE TYPE                      WITH
  CREATE USER