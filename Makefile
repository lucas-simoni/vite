.DEFAULT_GOAL := help
SHELL         := /usr/bin/env bash
MAKEFLAGS     += --warn-undefined-variables --no-builtin-rules

export APP_NAME := Vite
VERSION         := $(shell npm pkg get version)

# HELP TEXT COLORS
MF_BLUE=\033[36m
MF_NO_COLOR=\033[0m

help:
	@echo -e "Usage: make ${MF_BLUE}<command>${MF_NO_COLOR}"
	@echo
	@echo 'Commands:'
	@awk 'BEGIN {FS = ":.*##"; printf "${MF_BLUE}${MF_NO_COLOR}"} /^[$$()% 0-9a-zA-Z_-]+:.*?##/ { printf "    ${MF_BLUE}%-15s${MF_NO_COLOR} %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s${MF_NO_COLOR}\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

bootstrap:	## Spin a development container and exec into it.
	./scripts/docker-compose-up.sh ./docker/docker-compose.yml -d
	./scripts/docker-compose-exec.sh ./docker/docker-compose.yml app

lint:				## Run linters within a Docker container.
	./scripts/docker-compose-up.sh ./docker/docker-compose-lint.yml --abort-on-container-exit

test:				## Run unit tests within a Docker container.
	./scripts/docker-compose-up.sh ./docker/docker-compose-test.yml --abort-on-container-exit

nginx:			## Build the application and serve it using NGINX.
	./scripts/docker-compose-up.sh ./docker/docker-compose-nginx.yml -d

down:				## Stop and remove containers, networks, volumes, and images created by the commands above.
	./scripts/docker-compose-down.sh ./docker/docker-compose.yml
