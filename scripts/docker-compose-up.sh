#!/usr/bin/env bash

set -e
set -x

COMPOSE=$(command -v docker-compose)

${COMPOSE} -f "${1}" -p "${APP_NAME}" down -v --remove-orphans &&\
${COMPOSE} -f "${1}" build &&\
${COMPOSE} -f "${1}" config &&\
if ${COMPOSE} -f "${1}" -p "${APP_NAME}" up "${2}"
then
  echo "** ${1} succeeded **"
else
  echo "** ${1} failed **"
  exit 1
fi
