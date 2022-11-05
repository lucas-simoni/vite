#!/usr/bin/env bash

set -e
set -x

COMPOSE=$(command -v docker-compose)

${COMPOSE} -f "${1}" -p "${APP_NAME}" down -v --remove-orphans
