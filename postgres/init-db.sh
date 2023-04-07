#!/usr/bin/env bash
set -e

psql -v ON_ERROR_STOP=1 -U postgres -d postgres <<-EOSQL
  CREATE DATABASE marcherunner;
  GRANT ALL PRIVILEGES ON DATABASE marcherunner TO postgres;
EOSQL
