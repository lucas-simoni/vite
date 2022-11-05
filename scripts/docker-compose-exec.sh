#!/usr/bin/env bash

set -e
set -x

COMPOSE=$(command -v docker-compose)

${COMPOSE} -f "${1}" -p "${APP_NAME}" exec "${2}" /bin/sh
